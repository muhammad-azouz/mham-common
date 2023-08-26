import * as z from "zod";
export declare const doctorLoginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const doctorLoginResponseSchema: z.ZodObject<{
    jwt: z.ZodString;
    fullName: z.ZodString;
    doctorId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    jwt: string;
    fullName: string;
    doctorId: string;
}, {
    jwt: string;
    fullName: string;
    doctorId: string;
}>;
export type DoctorLoginResponse = z.infer<typeof doctorLoginResponseSchema>;
export declare const studentLoginRequestSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    uuid: z.ZodString;
    doctorId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    doctorId: string;
    uuid: string;
}, {
    email: string;
    password: string;
    doctorId: string;
    uuid: string;
}>;
export declare const studentLoginResponseSchema: z.ZodObject<{
    studentId: z.ZodString;
    email: z.ZodString;
    fullName: z.ZodString;
    phone: z.ZodString;
    doctorId: z.ZodString;
    jwt: z.ZodString;
    university: z.ZodString;
    academicYear: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    jwt: string;
    fullName: string;
    doctorId: string;
    studentId: string;
    phone: string;
    university: string;
    academicYear: string;
}, {
    email: string;
    jwt: string;
    fullName: string;
    doctorId: string;
    studentId: string;
    phone: string;
    university: string;
    academicYear: string;
}>;
export type StudentLoginRequest = z.infer<typeof studentLoginRequestSchema>;
export type StudentLoginResponse = z.infer<typeof studentLoginResponseSchema>;
export declare const jwtPayloadSchema: z.ZodObject<{
    roll: z.ZodEnum<["student", "doctor"]>;
    studentId: z.ZodString;
    doctorId: z.ZodString;
    jwt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    doctorId: string;
    studentId: string;
    roll: "student" | "doctor";
    jwt?: string | undefined;
}, {
    doctorId: string;
    studentId: string;
    roll: "student" | "doctor";
    jwt?: string | undefined;
}>;
export type JwtPayload = z.infer<typeof jwtPayloadSchema>;
//# sourceMappingURL=auth.d.ts.map