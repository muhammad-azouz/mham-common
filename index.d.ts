import { doctorLoginSchema, DoctorLoginResponse, JwtPayload, StudentLoginRequest, StudentLoginResponse, doctorLoginResponseSchema, jwtPayloadSchema, studentLoginRequestSchema, studentLoginResponseSchema } from "./types/auth";
import { Course, CourseWithLectures, Lecture, SubscriptionStatus, courseSchema, courseWithLecturesSchema, lectureSchema } from "./types/course";
import { Doctor, doctorSchema } from "./types/doctor";
import { EnrollLecture, Enrollment, enrollLectureSchema, enrollSchema } from "./types/enrolment";
import { ResponseType } from "./types/error";
import { Student, StudentStatus, statusValueSchema, studentSchema } from "./types/student";
import { University, universitySchema } from "./types/university";
import { AcademicYear, academicYearSchema } from "./types/academicYear";
export type { DoctorLoginResponse, StudentLoginRequest, StudentLoginResponse, Course, CourseWithLectures, SubscriptionStatus, Doctor, EnrollLecture, ResponseType, University, AcademicYear, JwtPayload, Lecture, Enrollment, Student, StudentStatus, };
export { doctorLoginSchema, doctorLoginResponseSchema, jwtPayloadSchema, studentLoginRequestSchema, studentLoginResponseSchema, courseSchema, courseWithLecturesSchema, lectureSchema, doctorSchema, enrollLectureSchema, enrollSchema, statusValueSchema, studentSchema, universitySchema, academicYearSchema, };
//# sourceMappingURL=index.d.ts.map