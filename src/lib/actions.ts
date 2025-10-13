"use server";

import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      type: "error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors in the form.",
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // Moved initialization inside the function
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // This must be a verified domain in Resend
      to: 'your-email@example.com', // IMPORTANT: Change this to your actual email address
      subject: `New message from ${name} via your portfolio`,
      reply_to: email,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    if (data.error) {
        throw new Error(data.error.message);
    }

    return {
      type: "success",
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      type: "error",
      message: "Something went wrong. Please try again later.",
    };
  }
}
