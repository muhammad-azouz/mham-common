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
exports.statusValueSchema = exports.studentSchema = void 0;
const z = __importStar(require("zod"));
const statusValueSchema = z.union([
    z.literal("pending"),
    z.literal("accepted"),
    z.literal("rejected"),
]);
exports.statusValueSchema = statusValueSchema;
const studentSchema = z.object({
    _id: z.string().optional(),
    doctorId: z
        .string({ required_error: "doctor is required!" })
        .nonempty({ message: "doctor id required!" }),
    firstName: z.string().nonempty({
        message: "first name must contain at least 1 character",
    }),
    lastName: z.string().nonempty({
        message: "last name must contain at least 1 character",
    }),
    email: z.string().email(),
    phone: z
        .string()
        .startsWith("01")
        .min(11, { message: "check your phone number!" })
        .max(11, { message: "check your phone number!" }),
    university: z.string().nonempty({
        message: "university is required!",
    }),
    academicYear: z.string().nonempty({
        message: "academic year is required!",
    }),
    uuid: z.string().nonempty({
        message: "uuid  is required!",
    }),
    image: z.string().optional(),
    status: statusValueSchema,
    password: z.string().min(8),
    lastLogin: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
});
exports.studentSchema = studentSchema;
