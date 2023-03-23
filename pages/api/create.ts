export default async function handler(prompt: string) {
  const payload = {
    model: "text-davinci-003",
    prompt,
    temperature: process.env.NEXT_PUBLIC_AI_TEMP
      ? parseFloat(process.env.NEXT_PUBLIC_AI_TEMP)
      : 0.7,
    max_tokens: process.env.NEXT_PUBLIC_AI_MAX_TOKENS
      ? parseInt(process.env.NEXT_PUBLIC_AI_MAX_TOKENS)
      : 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
  };

  const response = await (
    await fetch("https://api.openai.com/v1/completions", {
      headers: requestHeaders,
      method: "POST",
      body: JSON.stringify(payload),
    })
  ).json();

  if (response.error) {
    console.error("OpenAI API error: ", response.error);
    return `OpenAI API 에러가 발생했습니다. ${response.error.message}`;
  }

  return response.choices[0].text;
}
