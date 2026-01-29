"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendHiringEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const role = formData.get("role") as string;
    const message = formData.get("message") as string;

    try {
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "founder@hireoo.ai",
            subject: `New Hire Inquiry from ${name} at ${company}`,
            html: `
        <h2>New Hire Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Role to Hire:</strong> ${role}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
}

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "founder@hireoo.ai",
            subject: `New Contact Inquiry from ${name}`,
            html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
}

export async function sendJobInquiryEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;
    const linkedin = formData.get("linkedin") as string;
    const message = formData.get("message") as string;

    try {
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "founder@hireoo.ai",
            subject: `New Job Seeker: ${name}`,
            html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Desired Role:</strong> ${role}</p>
        <p><strong>LinkedIn/Portfolio:</strong> ${linkedin}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
}
