import * as z from "zod";
declare const doctorSchema: z.ZodObject<{
    _id: z.ZodOptional<z.ZodString>;
    fullName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    fullName: string;
    description: string;
    _id?: string | undefined;
}, {
    email: string;
    password: string;
    fullName: string;
    description: string;
    _id?: string | undefined;
}>;
type Doctor = z.infer<typeof doctorSchema>;
export type { Doctor };
export { doctorSchema };
//# sourceMappingURL=doctor.d.ts.map