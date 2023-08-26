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
exports.courseWithLecturesSchema = exports.courseSchema = exports.lectureSchema = void 0;
const z = __importStar(require("zod"));
const student_1 = require("./student");
exports.lectureSchema = z.object({
    _id: z.string().optional(),
    doctorId: z.string().nonempty(),
    courseId: z.string().nonempty(),
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    isFree: z.boolean(),
    attachment: z.string().optional(),
    cover: z.string(),
    url: z.string().url(),
    material: z.string(),
    subscriptionStatus: student_1.statusValueSchema,
});
exports.courseSchema = z.object({
    _id: z.string().optional(),
    doctorId: z.string({ required_error: "doctorId is required!" }).nonempty(),
    title: z.string({ required_error: "title is required!" }).nonempty(),
    description: z
        .string({ required_error: "description is required!" })
        .nonempty(),
    cover: z.string({ required_error: "cover is required!" }).url().nonempty(),
    instructor: z
        .string({ required_error: "instructor is required!" })
        .nonempty(),
    university: z
        .string({ required_error: "university is required!" })
        .nonempty(),
    year: z.string({ required_error: "year is required!" }).nonempty(),
    startDate: z.string({ required_error: "start date is required!" }),
    endDate: z.string({ required_error: "end date is required!" }),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    status: student_1.statusValueSchema,
});
exports.courseWithLecturesSchema = exports.courseSchema.extend({
    lectures: z
        .array(exports.lectureSchema, {
        required_error: "to save this course add some lectures!",
    })
        .min(1, { message: "lectures must contain at least 1 element(s)" }),
});
