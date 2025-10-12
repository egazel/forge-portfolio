'use server';
/**
 * @fileOverview An AI tool that suggests relevant skill tags for portfolio projects based on their descriptions and code samples.
 *
 * - suggestSkillTags - A function that analyzes project content and suggests relevant skill tags.
 * - SuggestSkillTagsInput - The input type for the suggestSkillTags function.
 * - SuggestSkillTagsOutput - The return type for the suggestSkillTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSkillTagsInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the portfolio project.'),
  codeSamples: z
    .string()
    .optional()
    .describe('Optional code samples from the project.'),
});
export type SuggestSkillTagsInput = z.infer<typeof SuggestSkillTagsInputSchema>;

const SuggestSkillTagsOutputSchema = z.object({
  suggestedTags: z
    .array(z.string())
    .describe('An array of suggested skill tags relevant to the project.'),
});
export type SuggestSkillTagsOutput = z.infer<typeof SuggestSkillTagsOutputSchema>;

export async function suggestSkillTags(input: SuggestSkillTagsInput): Promise<SuggestSkillTagsOutput> {
  return suggestSkillTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSkillTagsPrompt',
  input: {schema: SuggestSkillTagsInputSchema},
  output: {schema: SuggestSkillTagsOutputSchema},
  prompt: `You are an AI portfolio curator. Your task is to analyze the provided project description and code samples (if available) and suggest relevant skill tags. These tags will help categorize the project and highlight the developer's expertise.

Project Description: {{{projectDescription}}}

{{#if codeSamples}}
Code Samples: {{{codeSamples}}}
{{/if}}

Based on the above information, suggest a list of skill tags that are most relevant to this project.  These should be technologies or skills (e.g., 'Python', 'Maya API', 'C#', 'Three.js', etc.).  Return as an array of strings.

Ensure that the tags are specific and accurately reflect the skills and technologies used in the project.
`,
});

const suggestSkillTagsFlow = ai.defineFlow(
  {
    name: 'suggestSkillTagsFlow',
    inputSchema: SuggestSkillTagsInputSchema,
    outputSchema: SuggestSkillTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
