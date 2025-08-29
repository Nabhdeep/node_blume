import { Router } from "express";
import { home } from "./controller";
import { validateForm } from "../../services/middleware";

const router = new Router();

router.post('/form',validateForm ,home)


export default router