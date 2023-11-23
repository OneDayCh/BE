const baseResponse = {
    // Success
    SUCCESS : { "isSuccess": true, "code": 1000, "message":"성공" },
    DB_ERROR : { "isSuccess": false, "code": 4000, "message": "데이터 베이스 에러"},
    SERVER_ERROR : { "isSuccess": false, "code": 4001, "message": "서버 에러"}
    
    //5000~ 6000
    ,EMPTY_TIME : { "isSuccess": false, "code": 5001, "message": "time 입력 안됨"}
    ,EMPTY_DATE : { "isSuccess": false, "code": 5002, "message": "date 입력 안됨"}
    ,EMPTY_SHOPID : { "isSuccess": false, "code": 5003, "message": "shopId 입력 안됨"}
    ,EMPTY_USERID : { "isSuccess": false, "code": 5004, "message": "userId 입력 안됨"} //다양한 케이스가 있음 1. domain 별로 나누기 , (ex. 공통, user, board 등) !


}

export default baseResponse;