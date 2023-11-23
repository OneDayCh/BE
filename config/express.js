import express from "express";
import session from "express-session"
import compression from "compression";
import methodOverride from 'method-override';
import cors from "cors";
const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cors());

//app.use();

export default app;