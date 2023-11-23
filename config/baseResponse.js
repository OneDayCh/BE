const baseResponse = {
    // Success
    SUCCESS : { "isSuccess": true, "code": 1000, "message":"성공" },
    DB_ERROR : { "isSuccess": false, "code": 4000, "message": "데이터 베이스 에러"},
    SERVER_ERROR : { "isSuccess": false, "code": 4001, "message": "서버 에러"}

}

export default baseResponse;