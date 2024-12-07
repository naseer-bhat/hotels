import { model, Schema } from "mongoose";
const personSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    work: { type: String, enum: ["chef", "waiter", "manager"], required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    salary: { type: Number, required: true },
  },
  { timestamps: true } 
);
export const Person = model("Person", personSchema);
