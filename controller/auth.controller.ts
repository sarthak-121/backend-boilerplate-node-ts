import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Auth from "../model/auth.model";
import verifyGoogleToken from "../utils/googleAuth";
import { ISignupPayload } from "../types";

const signupController = async (req: Request, res: Response) => {
  const payload: ISignupPayload = req.body;

  let name = "";
  let email = "";
  let password = "";

  try {
    if ("googleToken" in payload) {
      verifyGoogleToken(payload.googleToken);

      res.send({ status: "WIP" });
      return;
    }

    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        error: true,
        message: "Email already exists. Please use a different email.",
      });
    }

    let hashedPassword = "";

    if (password?.length) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    const newUser = new Auth({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ error: false, message: "User created successfully!" });
  } catch (error) {
    // If an error occurs, respond with an error message
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

export { signupController };
