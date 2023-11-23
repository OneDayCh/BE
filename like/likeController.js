import baseResponse from '../config/baseResponse';
import { errResponse, SUCCESSResponse } from '../config/response';
import {createUserLikeStore,updateUserLikeStore} from "./likeService";
import {findUserLikeStore} from "./likeProvider";

/*
API : [GET] 찜 되어 있는 가게 목록을 가지고 온다.
*/

export const  getUserLikeStore= async (req, res) => {

    //필요한 파라미터: userId
    const userId = req.params.userId;

    const getUserLikeStoreResult = await findUserLikeStore(userId);

    if(getUserLikeStoreResult === null || getUserLikeStoreResult === false){
        return res.send(errResponse(baseResponse.SERVER_ERROR));
    }

    return res.send(SUCCESSResponse(baseResponse.SUCCESS, getUserLikeStoreResult));

};
//컨트롤러에서 타입, service에서 db와 가까운 논리적인 밸리데이션 
// 컨트롤러: 받았을 때랑 내려줄 때 직전에 가공 처리 / 서비스는 핵심적인 비즈니스 로직(요구사항 처리);
//밸리데이션은 하나의 
//로드밸런서, 메세지큐이용해서 담아둔다음에 하났ㄱ 꺼내서 처리한다. 

export const postUserLikeStore = async(req,res) =>{

    const userId = req.body.userId;
    const shopId = req.body.shopId;

    const postUserLikeStoreResult = await createUserLikeStore(userId, shopId);
    if(postUserLikeStoreResult == null || postUserLikeStoreResult == false){
        return res.send(errResponse(baseResponse.SERVER_ERROR));
    }

    return  res.send(SUCCESSResponse(baseResponse.SUCCESS, postUserLikeStoreResult));

}

export const deleteUserLikeStore = async(req,res) =>{

    const userId = req.body.userId;
    const shopId = req.body.shopId;

    const deleteUserLikeStoreResult = await updateUserLikeStore(userId, shopId);
    if(deleteUserLikeStoreResult == null || deleteUserLikeStoreResult == false){
        return res.send(errResponse(baseResponse.SERVER_ERROR));
    }

    return  res.send(SUCCESSResponse(baseResponse.SUCCESS, deleteUserLikeStoreResult));

}
