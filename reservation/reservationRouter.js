import express from 'express';
import {postReservation, getReservationList, getUserReservationList  } from './reservationController';

const reservationRouter = express.Router();

//userRouter.patch('/nickname/:userId', patchNickname);
//userRouter.delete('/:userId', deleteUser);
//userRouter.get('/:userId', getUserInfo);
reservationRouter.post('/', postReservation);
reservationRouter.get('/',getReservationList);
reservationRouter.get('/:userId',getUserReservationList);
export default reservationRouter;

//필요한 파라미터 : time, date, shop_id, user_id