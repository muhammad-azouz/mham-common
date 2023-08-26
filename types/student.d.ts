import * as z from "zod";
declare const statusValueSchema: z.ZodUnion<[z.ZodLiteral<"pending">, z.ZodLiteral<"accepted">, z.ZodLiteral<"rejected">]>;
declare const studentSchema: z.ZodObject<{
    _id: z.ZodOptional<z.ZodString>;
    doctorId: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    university: z.ZodString;
    academicYear: z.ZodString;
    uuid: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    status: z.ZodUnion<[z.ZodLiteral<"pending">, z.ZodLiteral<"accepted">, z.ZodLiteral<"rejected">]>;
    password: z.ZodString;
    lastLogin: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    status: "pending" | "accepted" | "rejected";
    doctorId: string;
    uuid: string;
    phone: string;
    university: string;
    academicYear: string;
    firstName: string;
    lastName: string;
    _id?: string | undefined;
    image?: string | undefined;
    lastLogin?: number | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}, {
    email: string;
    password: string;
    status: "pending" | "accepted" | "rejected";
    doctorId: string;
    uuid: string;
    phone: string;
    university: string;
    academicYear: string;
    firstName: string;
    lastName: string;
    _id?: string | undefined;
    image?: string | undefined;
    lastLogin?: number | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}>;
type StudentStatus = z.infer<typeof statusValueSchema>;
type Student = z.infer<typeof studentSchema>;
export type { Student, StudentStatus };
export { studentSchema, statusValueSchema };
//# sourceMappingURL=student.d.ts.map