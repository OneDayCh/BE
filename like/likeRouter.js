import express from 'express';
import {getUserLikeStore} from "./likeController"

const likeRouter = express.Router();

//userRouter.patch('/nickname/:userId', patchNickname);
//userRouter.delete('/:userId', deleteUser);
//userRouter.get('/:userId', getUserInfo);
likeRouter.get('/:userId', getUserLikeStore);

export default likeRouter;

//필요한 파라미터 : time, date, shop_id, user_id