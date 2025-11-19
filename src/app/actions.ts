
"use server";

import { z } from "zod";
import { initializeFirebase } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

const ContactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email(),
    phone: z.string().optional(),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
    privacyConsent: z.literal(true, {
        errorMap: () => ({ message: "You must accept the privacy policy" }),
    }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
    const validatedFields = ContactFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        message: formData.get("message"),
        privacyConsent: formData.get("privacyConsent") === "on",
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please check the form for errors.",
            success: false,
        };
    }

    try {
        const { firestore } = initializeFirebase();
        await addDoc(collection(firestore, "contacts"), {
            ...validatedFields.data,
            createdAt: new Date(),
        });

        return { message: "Your message has been sent successfully!", success: true, errors: {} };
    } catch (e) {
        return { message: "An error occurred. Please try again.", success: false, errors: {} };
    }
}

const NewsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
    const validatedFields = NewsletterSchema.safeParse({
        email: formData.get("email"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: validatedFields.error.flatten().fieldErrors.email?.[0] ?? "Validation failed.",
            success: false,
        };
    }
    
    try {
        const { firestore } = initializeFirebase();
        await addDoc(collection(firestore, "newsletter_subscriptions"), {
            email: validatedFields.data.email,
            subscribedAt: new Date(),
        });
        return { message: "Thank you for subscribing!", success: true, errors: {} };
    } catch (e) {
        return { message: "An error occurred. Please try again.", success: false, errors: {} };
    }
}

const AppointmentSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional(),
    service: z.string().min(1),
    date: z.string().min(1),
    time: z.string().min(1),
    message: z.string().optional(),
});

export async function bookAppointment(prevState: any, formData: FormData) {
    const validatedFields = AppointmentSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        date: formData.get('date'),
        time: formData.get('time'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please fill all required fields correctly.",
            success: false,
        };
    }

    try {
        const { firestore } = initializeFirebase();
        await addDoc(collection(firestore, "appointments"), {
            ...validatedFields.data,
            date: new Date(validatedFields.data.date),
            status: 'pending',
            createdAt: new Date(),
        });
        return { message: "Appointment booked successfully!", success: true, errors: {} };
    } catch (e) {
        return { message: "An error occurred while booking. Please try again.", success: false, errors: {} };
    }
}
