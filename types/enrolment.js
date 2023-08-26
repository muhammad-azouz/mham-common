"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrollSchema = exports.enrollLectureSchema = void 0;
const z = __importStar(require("zod"));
const student_1 = require("./student");
const enrollLectureSchema = z.object({
    lectureId: z.string(),
    title: z.string(),
    cover: z.string().url(),
});
exports.enrollLectureSchema = enrollLectureSchema;
const enrollSchema = z.object({
    _id: z.string().optional(),
    doctorId: z.string(),
    studentId: z.string({ required_error: "student id is required!" }),
    studentName: z.string({ required_error: "studentName is required" }),
    courseId: z.string({ required_error: "course id is required!" }),
    material: z.string({ required_error: "material is required!" }),
    universityId: z.string({ required_error: "university id required!" }),
    yearId: z.string({ required_error: "year id required!" }),
    courseTitle: z.string({ required_error: "course title is required!" }),
    cover: z.string().url().optional(),
    lectures: z.array(enrollLectureSchema),
    status: student_1.statusValueSchema,
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
});
exports.enrollSchema = enrollSchema;
