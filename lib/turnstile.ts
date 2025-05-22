/**
 * Validates a Cloudflare Turnstile token
 * @param token The Turnstile token to validate
 * @returns Promise<boolean> Whether the token is valid
 */
export async function validateTurnstileToken(token: string): Promise<boolean> {
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });

  const data = await response.json();
  return data.success;
}
