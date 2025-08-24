import React, { useState } from "react";

interface ChatBotProps {
  fileText: string;
}

interface Message {
  role: "user" | "bot";
  content: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ fileText }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "업로드된 기획서에서 궁금한 점을 질문해 주세요." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/gemini-spellcheck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileText, question: input }),
      });
      const result = await res.json();
      
      if (result.answer) {
        setMessages((prev) => [...prev, { role: "bot", content: result.answer }]);
      } else {
        setMessages((prev) => [...prev, { role: "bot", content: result?.error?.message || "AI 답변을 가져오지 못했습니다." }]);
      }
    } catch (e) {
      setError("서버 또는 네트워크 오류가 발생했습니다.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-gray-100 rounded p-2 h-40 overflow-y-auto mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.role === "user" ? "text-right" : "text-left"}>
            <span className={msg.role === "user" ? "text-blue-700" : "text-gray-800 font-semibold"}>
              {msg.role === "user" ? "나: " : "챗봇: "}
            </span>
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-gray-500 text-sm">AI 답변 생성 중...</div>}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          type="text"
          value={input}
          placeholder="질문을 입력하세요"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
          disabled={loading}
        />
        <button
          className="bg-blue-600 text-white px-4 py-1 rounded"
          onClick={handleSend}
          disabled={loading}
        >
          전송
        </button>
      </div>
      {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
    </div>
  );
};


export default ChatBot;
