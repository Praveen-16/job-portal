import express from "express";
import Users from "../models/userModel.js";

import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import companyRoute from "./companiesRoutes.js";
import jobRoute from "./jobsRoutes.js";

const router = express.Router();

const path = "/api-v1/";
router.use('/api-v1/auth/', authRoute)


router.use(`${path}users`, userRoute);
router.use(`${path}companies`, companyRoute);
router.use(`${path}jobs`, jobRoute);



export default router;
