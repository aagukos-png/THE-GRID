
import { GoogleGenAI, Type } from "@google/genai";

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
        { text: "Analyze this EPRA license document. Extract the Name, License Number, Class (e.g., A-1, B, T3), and Expiry Date. Return strictly valid JSON." }
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

export const matchJobs = async (technicianProfile: any, availableJobs: any[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Based on this technician profile: ${JSON.stringify(technicianProfile)}, match the best 3 jobs from this list: ${JSON.stringify(availableJobs)}. Return the IDs and a brief 'why' for each in JSON format.`,
    config: {
      responseMimeType: "application/json"
    }
  });
  return JSON.parse(response.text || '{}');
};
