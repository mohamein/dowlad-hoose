import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Phone number must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password most contain 8 character.",
  }),
});

export const loginSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password most contain 8 character.",
  }),
});

export const receiptSchema = z.object({
  place: z.string().min(1),
  telephone: z.string().min(7),
  receipt_code: z.string().min(1),
  receipt_number: z.string().min(1),
  receipt_date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  cabbirka: z.string(),
  dhisan: z.string(),
  tax_ref: z.string(),
  receivedFrom: z.string().min(1),
  total_amount: z.string(),
  amount_in_words: z.string(),
});
