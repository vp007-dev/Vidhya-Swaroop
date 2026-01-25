import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { contactRateLimiter } from "./rateLimiter";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: 'volunteer' | 'donation' | 'general' | 'partnership';
}

export const submitContactForm = async (data: ContactFormData) => {
  // Rate limiting check
  const identifier = `${data.email}_${data.name}`;
  
  if (!contactRateLimiter.isAllowed(identifier)) {
    const remainingTime = Math.ceil(contactRateLimiter.getRemainingTime(identifier) / 1000);
    return { 
      success: false, 
      error: `Too many submissions. Please wait ${remainingTime} seconds before trying again.` 
    };
  }

  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      ...data,
      timestamp: serverTimestamp(),
      status: 'new',
      ip: 'client-side' 
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};