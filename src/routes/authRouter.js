import * as express from "express";
import {login, signup } from "./../controller/auth/auth"

const authRoute = express.Router();

authRoute.post("/signup", signup);
authRoute.post("/login", login);

export default authRoute;