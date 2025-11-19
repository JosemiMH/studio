
"use server";

import { z } from "zod";
import { addDocumentNonBlocking } from "@/firebase";
import { collection, getFirestore }from "firebase/firestore";
import { initializeFirebase } from "@/firebase";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  const { firestore } = initializeFirebase();
  const contactsCollection = collection(firestore, "contacts");
  await addDocumentNonBlocking(contactsCollection, validatedFields.data);

  return {
    message: "Thank you for your message. We will get back to you shortly.",
    errors: {},
    success: true,
  };
}

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
    const validatedFields = newsletterSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please provide a valid email address.",
        };
    }
    
    const { firestore } = initializeFirebase();
    const newsletterCollection = collection(firestore, "newsletter_subscriptions");
    await addDocumentNonBlocking(newsletterCollection, { email: validatedFields.data.email, subscribedAt: new Date() });

    return {
        message: "Thank you for subscribing to our newsletter!",
        errors: {},
        success: true,
    };
}


const appointmentSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    service: z.string().min(1, "Please select a service"),
    date: z.string().min(1, "Please select a date"),
    time: z.string().min(1, "Please select a time"),
    message: z.string().optional(),
});

export async function bookAppointment(prevState: any, formData: FormData) {
    const validatedFields = appointmentSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please correct the form errors.",
        };
    }

    const { firestore } = initializeFirebase();
    const appointmentsCollection = collection(firestore, "appointments");
    await addDocumentNonBlocking(appointmentsCollection, { ...validatedFields.data, status: 'pending', createdAt: new Date() });

    return {
        message: "Your appointment request has been sent successfully. We will confirm shortly.",
        errors: {},
        success: true,
    }
}
