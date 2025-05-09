
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, {
    message: "O nome deve ter pelo menos 3 caracteres.",
  }),
  email: z.string().email({
    message: "Email inválido.",
  }),
  phone: z.string().min(10, {
    message: "Telefone inválido.",
  }).max(15, {
    message: "Telefone muito longo.",
  }).refine((val) => /^[0-9()-\s+]+$/.test(val), {
    message: "Telefone deve conter apenas números, parênteses, traços e espaços.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }).max(500, {
    message: "A mensagem não pode exceder 500 caracteres.",
  }),
  captcha: z.boolean().refine(val => val === true, {
    message: "Por favor, confirme que você não é um robô.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
