import { Form } from "@prisma/client";
import { Request } from "express";

export interface FormRequest extends Request {
  form: Form
}