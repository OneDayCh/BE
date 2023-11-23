export const insertReservation = async(createReservationParams, connection)=>{

    const insertReservationQuery = `insert operationTime(time, reservation_check, shop_id, user_id, date ) values(?, 1, ?, ?,?);`;
    const insertReservationResult = await connection.query(insertReservationQuery, createReservationParams);
    
    return true;
}

