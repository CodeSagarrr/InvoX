import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ error: "name must be required!" })
    .trim()
    .min(2, { error: "atleat 2 char required in the name!" }),

  email: z
    .string({ error: "email must be required! " })
    .email()
    .trim()
    .min(2, { error: "atleat 2 char required in the email!" }),

  businessName: z
    .string({ error: "businessName must be required!" })
    .trim()
    .min(2, { error: "atleat 2 char required in the business name!" }),

  gstNumber: z
    .string({ error: "gstNumber is must be required!" })
    .trim()
    .regex(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      "Invalid GST number format (e.g., 22ABCDE1234F1Z5)"
    )
    .toUpperCase()
    .length(15, "GST number must be exactly 15 characters"),

  pan: z
    .string({ error: "PAN number is must be required!" })
    .trim()
    .regex(
      /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      "Invalid PAN format (e.g., ABCDE1234F)"
    )
    .toUpperCase()
    .length(10, "PAN must be exactly 10 characters"),

  address: z.string({ error: "address must be required!" }).trim(),
});

export const clientSchema = z.object({
  name: z
    .string({ error: "Name field required!" })
    .trim()
    .min(3, { error: "Name field must be contain 3 characters!" }),

  email: z
    .string({ error: "Email is required!" })
    .trim()
    .email({ error: "Email is required!" })
    .min(3, { error: "Email field must be contain 3 characters!" }),

  phone: z
    .string({ error: "Phone field required!" })
    .trim()
    .length(10, "GST number must be exactly 15 characters"),

  company: z
    .string({ error: "company field required!" })
    .trim()
    .min(3, { error: "Company field must be contain 3 characters!" }),

  gstNumber: z
    .string({ error: "gstNumber is must be required!" })
    .trim()
    .regex(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      "Invalid GST number format (e.g., 22ABCDE1234F1Z5)"
    )
    .toUpperCase()
    .length(15, "GST number must be exactly 15 characters"),

  address : z.string({ error : "Address is required ! "})
  .trim()
  .min(3 , { error : "Addres field must be contain 3 characters!"})
});

export const partialUserSchema = userSchema.partial();
export const partialClientSchema = clientSchema.partial();