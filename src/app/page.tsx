"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ChatBot from "../contents/ChatBot";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [fileText, setFileText] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowed = [".txt", ".docx", ".pdf"];
    const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!allowed.includes(ext)) {
      setError("지원하지 않는 파일 형식입니다. (txt, docx, pdf만 가능)");
      setFileName("");
      return;
    }
    setFileName(file.name);
    setError("");

    // 파일 종류별 텍스트 추출
    if (ext === ".txt") {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFileText(event.target?.result as string || "");
      };
      reader.readAsText(file);
    } else if (ext === ".pdf") {
      setFileText("PDF 파일 텍스트 추출은 추후 지원 예정입니다.");
      // TODO: pdf-parse 등으로 파싱 구현 필요
    } else if (ext === ".docx") {
      setFileText("DOCX 파일 텍스트 추출은 추후 지원 예정입니다.");
      // TODO: mammoth 등으로 파싱 구현 필요
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
      <div className="w-full max-w-[80%] bg-white rounded-xl shadow-md p-8 flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold mb-2">오타 교정 챗봇</h1>
        <label className="w-full flex flex-col items-center gap-2 cursor-pointer">
          <span className="text-gray-700">파일 업로드 (txt, docx, pdf)</span>
          <input
            type="file"
            accept=".txt,.docx,.pdf"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="border rounded px-3 py-2 w-full"
          />
        </label>
        {fileName && <div className="text-green-700">업로드 파일: {fileName}</div>}
        {error && <div className="text-red-600">{error}</div>}

        {fileText && (
          <div className="w-full mt-6">
            <h2 className="text-lg font-semibold mb-2">챗봇</h2>
            <ChatBot fileText={fileText} />
          </div>
        )} 

      </div>
    </div>
  );
}

