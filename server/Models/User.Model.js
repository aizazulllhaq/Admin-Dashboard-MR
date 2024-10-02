import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 50,
    },
    password: {
      type: String,
      required: true,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transanctions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
