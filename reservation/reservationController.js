import {} from './reservationService';
import {} from './reservationProvider';
import baseResponse from '../config/baseResponse';
import { errResponse, SUCCESSResponse } from '../config/response';
import {createReservation} from "./reservationService";
import {findUserReservationList, findReservationList} from "./reservationProvider";

/*
API : [POST]새로운 예약을 추가한다.
*/

export const  postReservation= async (req, res) => {

    const time = req.body.time;
    const date = req.body.date;
    const shopId = req.body.shopId;
    const userId = req.body.userId;
    console.log("time: ", time);
    //필요한 파라미터 : time, date, shop_id, user_id

    const postReservationResult = await createReservation(time, date, shopId, userId);

    if(postReservationResult == null){
        return res.send(errResponse(baseResponse.SERVER_ERROR));
    }

    if(postReservationResult ==false){
        return res.send(postReservationResult);
    }

    return res.send(SUCCESSResponse(baseResponse.SUCCESS, postReservationResult));

    //필요한 응답 내용 : 예약 완료 여부 
};

/*
API : [GET] 사용자의 예약 완료된 항목 list를 가지고 온다. 
*/

export const  getUserReservationList= async (req, res) => {

    const userId = req.params.userId;
    //필요한 파리미터: user_id

    console.log(userId);
    const getUserReservationListResult = await findUserReservationList(userId);

    if(getUserReservationListResult == false){
        return res.send(errResponse(baseResponse.SERVER_ERROR));
    }

    return res.send(SUCCESSResponse(baseResponse.SUCCESS,getUserReservationListResult));
    //응답 형식: user_id, reservation_check, shop_id, time, date
};

/*
API : [GET] 해당 가게의 특정 날짜의 운영 시간 목록들을 가지고 온다.  
*/

export const getReservationList = async(req,res) =>{

    //필요한 파라미터: date, shop_id
    const date = req.params.date;
    const shopId = req.params.shopId;

    console.log(date);
    console.log(shopId);

    const getReservationListResult = await findReservationList(shopId,date);

    if(getReservationListResult == false){
        return res.send(errResponse(baseResponse.SERVER_ERROR));
    }

    return res.send(SUCCESSResponse(baseResponse.SUCCESS,getReservationListResult));

}