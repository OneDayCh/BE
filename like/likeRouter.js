import express from 'express';
import {getUserLikeStore,postUserLikeStore,deleteUserLikeStore} from "./likeController"

const likeRouter = express.Router();

//userRouter.patch('/nickname/:userId', patchNickname);
//userRouter.delete('/:userId', deleteUser);
//userRouter.get('/:userId', getUserInfo);
likeRouter.get('/:userId', getUserLikeStore);
likeRouter.post('/',postUserLikeStore);
likeRouter.put('/',deleteUserLikeStore);


export default likeRouter;

//필요한 파라미터 : time, date, shop_id, user_id