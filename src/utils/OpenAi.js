import OpenAI from 'openai';
import { OPENAI_KEY } from './const';
export const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});

async function main() {
    const stream = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: 'Say this is a test' }],
      stream: true,
    });
    for await (const chunk of stream) {
      process.stdout.write(chunk.choices[0]?.delta?.content || '');
    }
  }