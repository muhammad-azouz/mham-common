import * as z from "zod";
declare const universitySchema: z.ZodObject<{
    _id: z.ZodOptional<z.ZodString>;
    doctorId: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    doctorId: string;
    name: string;
    _id?: string | undefined;
}, {
    doctorId: string;
    name: string;
    _id?: string | undefined;
}>;
type University = z.infer<typeof universitySchema>;
export type { University };
export { universitySchema };
//# sourceMappingURL=university.d.ts.map