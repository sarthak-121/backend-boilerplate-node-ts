import express from "express";

import { signupController } from "../controller/auth.controller";

const route = express.Router();

route.post("/signup", signupController);

export default route;
