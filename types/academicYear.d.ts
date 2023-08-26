import * as z from "zod";
declare const academicYearSchema: z.ZodObject<{
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
type AcademicYear = z.infer<typeof academicYearSchema>;
export type { AcademicYear };
export { academicYearSchema };
//# sourceMappingURL=academicYear.d.ts.map