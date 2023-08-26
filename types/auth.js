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
exports.jwtPayloadSchema = exports.studentLoginResponseSchema = exports.studentLoginRequestSchema = exports.doctorLoginResponseSchema = exports.doctorLoginSchema = void 0;
const z = __importStar(require("zod"));
exports.doctorLoginSchema = z.object({
    email: z
        .string({ required_error: "email is required!" })
        .email("email no valid!")
        .nonempty(),
    password: z
        .string({ required_error: "password is required!" })
        .min(8, { message: "password must contain at least 8 characters" }),
});
exports.doctorLoginResponseSchema = z.object({
    jwt: z.string(),
    fullName: z.string(),
    doctorId: z.string(),
});
exports.studentLoginRequestSchema = z.object({
    email: z
        .string({ required_error: "email is required!" })
        .nonempty({ message: "username must contain at least 8 characters" }),
    password: z.string({ required_error: "password is required!" }).min(8),
    uuid: z.string({ required_error: "uuid is required!" }),
    doctorId: z
        .string({ required_error: "doctor is required!" })
        .nonempty({ message: "doctor id required!" }),
});
exports.studentLoginResponseSchema = z.object({
    studentId: z.string(),
    email: z
        .string({ required_error: "email is required!" })
        .nonempty({ message: "username must contain at least 8 characters" }),
    fullName: z.string(),
    phone: z.string(),
    doctorId: z.string({ required_error: "doctor is required!" }),
    jwt: z.string({ required_error: "JWT is Required!" }),
    university: z.string(),
    academicYear: z.string(),
});
exports.jwtPayloadSchema = z.object({
    roll: z.enum(["student", "doctor"]),
    studentId: z.string({ required_error: "student Id Required!" }),
    doctorId: z.string({ required_error: "doctor id required!" }),
    jwt: z.string().optional(),
});
