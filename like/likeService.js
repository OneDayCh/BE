import baseResponse from '../config/baseResponse';
import { errResponse, SUCCESSResponse } from '../config/response';
import pool from '../config/database';
import {postUserLikeStoreList,plusLikeCount,deleteUserLikeStoreList,subLikeCount} from './likeRepository';


export const createUserLikeStore = async(userId, shopId) =>{

    try{
    if(shopId == null){
        return errResponse(baseResponse.EMPTY_SHOPID);
    }
    if(userId == null){
        return errResponse(baseResponse.EMPTY_USERID);
    }

    const connection = await pool.getConnection(async(conn)=> conn);
    const createUserLikeStoreResult = await postUserLikeStoreList(userId,shopId,connection);
   
    const PlusUserLikeStoreResult = await plusLikeCount(shopId,connection);
    if(PlusUserLikeStoreResult == null){
        return errResponse(baseResponse.DB_ERROR);
    }
    
    connection.release();

    return createUserLikeStoreResult;
    }catch(err){

        console.log(err);
        return false;

    }

};

export const updateUserLikeStore = async(userId, shopId)=>{

    try{

        if(shopId == null){
            return errResponse(baseResponse.EMPTY_SHOPID);
        }
        if(userId == null){
            return errResponse(baseResponse.EMPTY_USERID);
        }
    
        const connection = await pool.getConnection(async(conn)=> conn);
        const updateUserLikeStoreResult = await deleteUserLikeStoreList(userId,shopId,connection);
       
        const subUserLikeStoreResult = await subLikeCount(shopId,connection);
        if(subUserLikeStoreResult == null){
            return errResponse(baseResponse.DB_ERROR);
        }
        
        connection.release();
    
        return updateUserLikeStoreResult;
        }catch(err){
    
            console.log(err);
            return false;
    
        }
    




}