"use server";

import { z } from "zod";
import { suggestSkillTags } from "@/ai/flows/ai-portfolio-curator";

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

// AI Curator
const curatorSchema = z.object({
  projectDescription: z.string().min(20, "Please provide a more detailed description."),
  codeSamples: z.string().optional(),
});

export async function getSkillTags(
  input: z.infer<typeof curatorSchema>
): Promise<{ success: boolean; tags: string[]; error?: string }> {
  const validatedInput = curatorSchema.safeParse(input);

  if (!validatedInput.success) {
    return {
      success: false,
      tags: [],
      error: validatedInput.error.flatten().fieldErrors.projectDescription?.[0] || "Invalid input.",
    };
  }
  
  try {
    const result = await suggestSkillTags(validatedInput.data);
    return { success: true, tags: result.suggestedTags };
  } catch (error) {
    console.error("AI Curator Error:", error);
    return {
      success: false,
      tags: [],
      error: "Failed to generate tags. Please try again later.",
    };
  }
}
