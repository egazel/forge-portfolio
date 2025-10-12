"use server";

import { z } from "zod";

// Contact Form
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

  // In a real app, you would send an email, save to a database, etc.
  console.log("Contact Form Submitted:", validatedFields.data);

  return {
    type: "success",
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
