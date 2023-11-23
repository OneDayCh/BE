import baseResponse from '../config/baseResponse';
import { errResponse, SUCCESSResponse } from '../config/response';
import pool from '../config/database';
import {selectUserLikeStoreList} from './likeRepository';

export const findUserLikeStore = async(userId) =>{

    try{

        if(userId == null){
            return errResponse(baseResponse.EMPTY_USERID);
        }

        const connection = await pool.getConnection(async(conn)=> conn);
        const findUserLikeStoreResult = await selectUserLikeStoreList(userId, connection);
        if(findUserLikeStoreResult  == false ){
            return errResponse(baseResponse.DB_ERROR);
        }
        
        connection.release();

        return findUserLikeStoreResult;

    }catch(err){

        console.log(err);
        return false;

    }


}