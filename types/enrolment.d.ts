import * as z from "zod";
declare const enrollLectureSchema: z.ZodObject<{
    lectureId: z.ZodString;
    title: z.ZodString;
    cover: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    cover: string;
    lectureId: string;
}, {
    title: string;
    cover: string;
    lectureId: string;
}>;
type EnrollLecture = z.infer<typeof enrollLectureSchema>;
declare const enrollSchema: z.ZodObject<{
    _id: z.ZodOptional<z.ZodString>;
    doctorId: z.ZodString;
    studentId: z.ZodString;
    studentName: z.ZodString;
    courseId: z.ZodString;
    material: z.ZodString;
    universityId: z.ZodString;
    yearId: z.ZodString;
    courseTitle: z.ZodString;
    cover: z.ZodOptional<z.ZodString>;
    lectures: z.ZodArray<z.ZodObject<{
        lectureId: z.ZodString;
        title: z.ZodString;
        cover: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        cover: string;
        lectureId: string;
    }, {
        title: string;
        cover: string;
        lectureId: string;
    }>, "many">;
    status: z.ZodUnion<[z.ZodLiteral<"pending">, z.ZodLiteral<"accepted">, z.ZodLiteral<"rejected">]>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "accepted" | "rejected";
    doctorId: string;
    studentId: string;
    courseId: string;
    material: string;
    lectures: {
        title: string;
        cover: string;
        lectureId: string;
    }[];
    studentName: string;
    universityId: string;
    yearId: string;
    courseTitle: string;
    _id?: string | undefined;
    cover?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}, {
    status: "pending" | "accepted" | "rejected";
    doctorId: string;
    studentId: string;
    courseId: string;
    material: string;
    lectures: {
        title: string;
        cover: string;
        lectureId: string;
    }[];
    studentName: string;
    universityId: string;
    yearId: string;
    courseTitle: string;
    _id?: string | undefined;
    cover?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}>;
type Enrollment = z.infer<typeof enrollSchema>;
export type { Enrollment, EnrollLecture };
export { enrollLectureSchema, enrollSchema };
//# sourceMappingURL=enrolment.d.ts.map