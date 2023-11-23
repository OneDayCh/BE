import baseResponse from '../config/baseResponse';
import { errResponse, SUCCESSResponse } from '../config/response';
import pool from '../config/database';
import {insertReservation} from './reservationRepository';

export const createReservation = async(time, date, shopId, userId) =>{
    try{

        if(time == null){
            return errResponse(baseResponse.EMPTY_TIME);
        }
        if(date == null){
            return errResponse(baseResponse.EMPTY_DATE);
        }
        if(shopId == null){
            return errResponse(baseResponse.EMPTY_SHOPID);
        }
        if(userId == null){
            return errResponse(baseResponse.EMPTY_USERID);
        }

        const createReservationParams = [time, shopId, userId ,date];
        const connection = await pool.getConnection(async(conn)=> conn);

        const createReservationResult = await insertReservation(createReservationParams, connection);

        if(createReservationResult != true ){
            return errResponse(baseResponse.DB_ERROR);
        }
        console.log(createReservationResult);
        
        connection.release();

        return true;
    }catch(err){

        console.log(err);
        return false;

    }


}