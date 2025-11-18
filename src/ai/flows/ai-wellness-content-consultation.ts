'use server';
/**
 * @fileOverview An AI agent for providing wellness content consultation.
 *
 * - getWellnessContentSummary - A function that summarizes the best wellness content available for luxury hotels.
 * - GetWellnessContentSummaryInput - The input type for the getWellnessContentSummary function.
 * - GetWellnessContentSummaryOutput - The return type for the getWellnessContentSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetWellnessContentSummaryInputSchema = z.object({
  query: z
    .string()
    .describe("The user's query for wellness content, e.g., 'summarize the best wellness content available for luxury hotels'."),
});
export type GetWellnessContentSummaryInput = z.infer<typeof GetWellnessContentSummaryInputSchema>;

const GetWellnessContentSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the best wellness content available for luxury hotels.'),
});
export type GetWellnessContentSummaryOutput = z.infer<typeof GetWellnessContentSummaryOutputSchema>;

export async function getWellnessContentSummary(input: GetWellnessContentSummaryInput): Promise<GetWellnessContentSummaryOutput> {
  return getWellnessContentSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getWellnessContentSummaryPrompt',
  input: {schema: GetWellnessContentSummaryInputSchema},
  output: {schema: GetWellnessContentSummaryOutputSchema},
  prompt: `You are an expert wellness consultant specializing in content for luxury hotels. Summarize the best wellness content available based on the user's query. 

Query: {{{query}}}`,
});

const getWellnessContentSummaryFlow = ai.defineFlow(
  {
    name: 'getWellnessContentSummaryFlow',
    inputSchema: GetWellnessContentSummaryInputSchema,
    outputSchema: GetWellnessContentSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
