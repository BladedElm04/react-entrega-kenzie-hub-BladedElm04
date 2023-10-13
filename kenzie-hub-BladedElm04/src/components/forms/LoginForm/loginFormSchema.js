import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().min(1, "E-mail é obrigatório"),
    password: z.string().min(1, "Senha é obrigatória")
})