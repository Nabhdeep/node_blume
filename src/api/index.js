import { Router } from "express";
import publics from './public';
import limiter from "../services/limiter/index";
const router = new Router();
const prefix = "/api/v1"

router.use(prefix+'/public' , limiter,publics)

export default router