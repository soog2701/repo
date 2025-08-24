import type { NextRequest } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "edge";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { fileText, question } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Gemini API 키가 설정되어 있지 않습니다." }), { status: 500 });
  }

  // Gemini API 호출
  try {
    const prompt = `아래는 기획서의 일부입니다. 오타, 맞춤법, 어색한 표현을 교정해 주세요.\n\n[기획서 내용]\n${fileText}\n\n[질문]\n${question}`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ parts: [{ text: prompt }] }]
    });
    const data = response.text;
    let answer = data 
    if (!answer) {
      answer = JSON.stringify(data);
    }
    return new Response(JSON.stringify({ answer }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Gemini API 호출 오류" }), { status: 500 });
  }
}
