import express from "express";
import session from "express-session"
import compression from "compression";
import methodOverride from 'method-override';
import cors from "cors";
import nailRouter from "../nail/nailRouter";
import reservationRouter from "../reservation/reservationRouter";
const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cors());

app.use('/nail', nailRouter);
app.use('/reservation', reservationRouter);

export default app;