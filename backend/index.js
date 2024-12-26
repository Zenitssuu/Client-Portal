import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";
import { onRequest } from "firebase-functions/v2/https";

const app = express();
dotenv.config();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use("/api", router);

app.listen(4000, () => console.log("server started"));

export default onRequest(app);
