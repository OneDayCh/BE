import baseResponse from '../config/baseResponse';
import { errResponse, SUCCESSResponse } from '../config/response';
import pool from '../config/database';
import {selectReservationList,selectUserReservationList} from './reservationRepository';

export const findUserReservationList = async( userId) =>{
    try{

        if(userId == null){
            return errResponse(baseResponse.EMPTY_USERID);
        }

        const  findUserReservationListParams = [userId];
        const connection = await pool.getConnection(async(conn)=> conn);
        const findUserReservationListResult = await selectUserReservationList(userId, connection);
        if(findUserReservationListResult == false ){
            return errResponse(baseResponse.DB_ERROR);
        }
        
        
        connection.release();

        return findUserReservationListResult;

    }catch(err){
        console.log(err);
        return false;

    }

}

export const findReservationList = async(shopId,date)=>{

    try{

        if(shopId == null){
            return errResponse(baseResponse.EMPTY_SHOPID);
        }

        if(date == null){
            return errResponse(baseResponse.EMPTY_DATE);
        }

        const  findReservationListParams = [shopId,date];
        const connection = await pool.getConnection(async(conn)=> conn);
        const findReservationListResult = await selectReservationList(findReservationListParams, connection);
        if(findReservationListResult  == false ){
            return errResponse(baseResponse.DB_ERROR);
        }
        
        connection.release();

        return findReservationListResult;

    }catch(err){
        console.log(err);
        return false;

    }




}