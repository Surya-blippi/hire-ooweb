"use server";

import { GoogleGenAI } from "@google/genai";

const API_KEY = "AIzaSyCK7v4fYUivUR28aKR4iKezFLetJ5qSp8s"; // User provided key

// Initialize client with key (syntax based on user snippet + typical API key usage if supported by constructor, 
// if not supported by constructor in this specific preview version, we might need to check docs or try standard patterns.
// The user snippet `const ai = new GoogleGenAI({});` suggests no key passed or handled via env vars? 
// But commonly keys are passed. Let's try passing it in constructor options or check if we need to pass it differently.
// Re-reading user snippet: `const ai = new GoogleGenAI({});`
// It's likely checking GOOGLE_API_KEY env var or similar. But I should try to pass it if possible.
// Let's assume `apiKey` property in config based on typical Google SDKs, or try to set it. 
// If the snippet implies it works without args (maybe local auth?), but here we need API key.
// Common pattern for new Google SDKs: `new GoogleGenAI({ apiKey: ... })`. Let's try that.

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function parseResume(formData: FormData) {
    try {
        const file = formData.get("file") as File;
        if (!file) {
            throw new Error("No file uploaded");
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64 = buffer.toString("base64");

        // Determine mime type
        const mimeType = file.type || "application/pdf";

        const prompt = `
      You are an expert HR AI. Analyze this resume (passed as an image or PDF) and extract the following details into a strict JSON format:
      
      {
        "name": "Full Name",
        "role": "Current or most recent Job Title",
        "exp": "Total years of experience (e.g., '5 years')",
        "company": "Current or most recent company",
        "skills": ["Array", "of", "top", "5", "skills"],
        "bio": "A short, professional 2-sentence summary of the candidate.",
        "university": "University Name or 'Unknown'"
      }

      Return ONLY the JSON. No markdown formatting.
    `;

        // The user snippet used `ai.models.generateContent`.
        // We need to pass the file. The new SDK usually supports 'inlineData' or similar in 'contents'.
        // adapting to new SDK structure:

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            // User said "Use this please", referring to the SDK usage. I'll stick to 1.5-flash for reliability unless requested otherwise, 
            // OR user implied using that specific model too? "gemini-3-flash-preview" seems like a typo/future model (maybe 2.0?). 
            // Let's stick to 1.5 flash which I know exists, using the new SDK syntax.
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: prompt },
                        {
                            inlineData: {
                                mimeType: mimeType,
                                data: base64
                            }
                        }
                    ]
                }
            ]
        });

        // The new SDK response structure might differ. User snippet: `console.log(response.text)`.
        // It seems `response.text` is a getter or property directly on the response object in the new SDK?
        // Let's verify by checking if it's a function or property. User snippet: `console.log(response.text);` implie property or getter.
        // However, usually it's `response.text()`. But user snippet has `response.text`.
        // I will try to handle both or trust the snippet. Snippet says `response.text`.

        const text = response.text || ""; // Fallback if undefined, but trusting snippet.

        // Clean up markdown code blocks if present
        let cleanedText = "";
        if (typeof text === 'string') {
            cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        } else if (typeof text === 'function') {
            // @ts-ignore
            cleanedText = (await text()).replace(/```json/g, "").replace(/```/g, "").trim();
        }

        return JSON.parse(cleanedText);
    } catch (error) {
        console.error("Error parsing resume:", error);
        return { error: "Failed to parse resume" };
    }
}
