import { z } from "zod"

export const registerFormSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().min(1, "Email é obrigatório"),
    password: z.string().min(8, "Necessário pelo menos 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    confirmPassword: z.string().min(1, "Necessário confirmar a senha"),
    bio: z.string().min(1, "Bio é obrigatória"),
    contact: z.string().min(1, "Contato é obrigatório"),
    course_module: z.string().min(1, "Módulo é obrigatório")
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
})