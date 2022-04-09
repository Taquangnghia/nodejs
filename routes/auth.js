import { Router } from "express";
import { singin, singup,list } from "../src/controllers/auth";

const users =  Router();
users.post("/singin",singin);
users.post("/singup",singup);
users.get('/users', list)


export default users;