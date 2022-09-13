import { Prompt, addCommentsToLanguage } from "./utility";

export const SOLVE = (code: string, inputLanguage: string): Prompt => {
  const inputLanguageCommented = addCommentsToLanguage(inputLanguage);
  return {
    prompt: `Question:
${code}
###
${inputLanguageCommented} Answer:
`,
    stop: ["###", "\n\n"],
    postFormat: (response) => response.trim(),
  };
};
