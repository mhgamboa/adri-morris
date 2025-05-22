"use server";

import { Resend } from "resend";
import { validateTurnstileToken } from "@/lib/turnstile";
import { EmailTemplate } from "@/components/email-template";
import { contactFormSchema } from "@/schema/contact-form-schema";

export async function sendEmail(formData: FormData & { turnstileToken: string }) {
  const formValues = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    turnstileToken: formData.get("turnstileToken") as string,
  };

  const validatedFields = contactFormSchema.safeParse(formValues);
  if (!validatedFields.success) {
    return { data: null, error: "Invalid fields" };
  }

  // Validate Turnstile token
  const isValidToken = await validateTurnstileToken(formValues.turnstileToken);
  if (!isValidToken) return { data: null, error: "Invalid security check" };

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: "Adri Morris <hello@adrimorris.com>",
      to: ["hello@adrimorris.com"],
      subject: "adrimorris.com - New Contact Form Submission",
      react: EmailTemplate({
        firstName: validatedFields.data.name,
        email: validatedFields.data.email,
        message: validatedFields.data.message,
      }),
    });

    return { data, error };
  } catch (error) {
    console.error(error);
    return { error: "Failed to send email" };
  }
}
