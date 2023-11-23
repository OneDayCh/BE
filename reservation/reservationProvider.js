import baseResponse from '../config/baseResponse';
import { errResponse, SUCCESSResponse } from '../config/response';
import pool from '../config/database';
import {selectUserReservationList} from './reservationRepository';

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