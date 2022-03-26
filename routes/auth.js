import { Router } from "express";
import { singin, singup } from "../src/controllers/auth";

const users =  Router();
users.get("/singin",singin);
users.post("/singup",singup);


export default users;