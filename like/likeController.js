import baseResponse from '../config/baseResponse';
import { errResponse, SUCCESSResponse } from '../config/response';
import {updateUserLikeStore} from "./likeService";
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

