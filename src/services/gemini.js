import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-lite",
});

export async function generateWebsite(formData) {
  const prompt = `
You are an AI Website Builder.

Generate ONLY valid JSON.

Business Name: ${formData.businessName}
Business Type: ${formData.businessType}
Description: ${formData.description}

Return this structure:

{
  "businessName":"",
  "businessType":"",
  "theme":"",
  "primaryColor":"",
  "sections":[],
  "content":{
      "heroTitle":"",
      "heroSubtitle":"",
      "about":"",
      "contact":""
  }
}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return response.text();
}