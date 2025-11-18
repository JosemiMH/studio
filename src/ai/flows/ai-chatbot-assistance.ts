'use server';

/**
 * @fileOverview Implements an AI-powered chatbot flow for answering questions about wellness and spa management.
 *
 * - aiChatbotAssistance - A function that handles the chatbot assistance process.
 * - AIChatbotAssistanceInput - The input type for the aiChatbotAssistance function.
 * - AIChatbotAssistanceOutput - The return type for the aiChatbotAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatbotAssistanceInputSchema = z.object({
  query: z.string().describe('The user query related to wellness and spa management.'),
});
export type AIChatbotAssistanceInput = z.infer<typeof AIChatbotAssistanceInputSchema>;

const AIChatbotAssistanceOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the user query.'),
});
export type AIChatbotAssistanceOutput = z.infer<typeof AIChatbotAssistanceOutputSchema>;

export async function aiChatbotAssistance(input: AIChatbotAssistanceInput): Promise<AIChatbotAssistanceOutput> {
  return aiChatbotAssistanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotAssistancePrompt',
  input: {schema: AIChatbotAssistanceInputSchema},
  output: {schema: AIChatbotAssistanceOutputSchema},
  prompt: `You are a helpful AI assistant providing information about wellness and spa management services offered by Eva Pérez, a consultant specializing in this field. Your goal is to answer user questions accurately and concisely, determining if Eva Pérez's services are a good fit for their needs. Only use the information provided in this prompt in your output. If the user question isn't relevant to wellness and spa management services, respond that you are specialized in wellness and spa management services.

User Query: {{{query}}}`,
});

const aiChatbotAssistanceFlow = ai.defineFlow(
  {
    name: 'aiChatbotAssistanceFlow',
    inputSchema: AIChatbotAssistanceInputSchema,
    outputSchema: AIChatbotAssistanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
