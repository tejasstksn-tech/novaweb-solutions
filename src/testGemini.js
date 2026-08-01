import { generateWebsite } from "./services/gemini";

export async function testGemini() {
  const result = await generateWebsite({
    businessName: "Power Gym",
    businessType: "Gym",
    description: "Modern fitness center in Bangalore",
  });

  console.log(result);
}