
import { GoogleGenAI, Type } from "@google/genai";

// Use gemini-3-flash-preview for extraction tasks
export const verifyLicense = async (base64Image: string, mimeType: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const cleanBase64 = base64Image.split(',')[1] || base64Image;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: {
      parts: [
        { 
          inlineData: { 
            data: cleanBase64, 
            mimeType: mimeType 
          } 
        },
        { text: "Analyze this EPRA license document. Extract the Name, License Number, Class (e.g., A-1, B, T3), and Expiry Date. Also evaluate if the document appears authentic. Return strictly valid JSON." }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          licenseNumber: { type: Type.STRING },
          licenseClass: { type: Type.STRING },
          expiryDate: { type: Type.STRING },
          isAuthentic: { type: Type.BOOLEAN }
        },
        required: ["name", "licenseNumber", "licenseClass", "expiryDate", "isAuthentic"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
};

// Use gemini-3-pro-preview for complex matching/reasoning tasks
export const matchJobs = async (technicianProfile: any, availableJobs: any[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Based on this technician profile: ${JSON.stringify(technicianProfile)}, match the best 3 jobs from this list: ${JSON.stringify(availableJobs)}. Return the IDs and a brief 'why' for each in JSON format.`,
    config: {
      responseMimeType: "application/json",
      // Adding a response schema for better reliability in JSON responses
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            jobId: { type: Type.STRING },
            reason: { type: Type.STRING }
          },
          required: ["jobId", "reason"]
        }
      }
    }
  });
  return JSON.parse(response.text || '[]');
};
