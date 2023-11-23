export const selectUserLikeStoreList = async(userId, connection) =>{

    const selectUserLikeStoreListQuery = `select * from likes where user_id = ${userId};`;
    const [selectReservationListResult] = await connection.query(selectUserLikeStoreListQuery);

    return selectReservationListResult;

}

export const postUserLikeStoreList = async(userId, shopId, connection) =>{

    const selectUserLikeStoreListQuery = `insert into likes(shop_id, user_id) values(${shopId}, ${userId});`;
    const [selectReservationListResult] = await connection.query(selectUserLikeStoreListQuery);

    return selectReservationListResult;

}

export const deleteUserLikeStoreList = async(userId, shopId, connection) =>{

    const deleteUserLikeStoreListQuery = `delete from likes where shop_id = ${shopId} and user_id = ${userId}; `;
    const [deleteReservationListResult] = await connection.query(deleteUserLikeStoreListQuery);

    return deleteReservationListResult;

}

export const plusLikeCount = async(shopId, connection)=>{

    const plusLikeCountQuery = `update shop set like_count = like_count+ 1 where id = ${shopId};`;
    const [plusLikeCountResult] = await connection.query(plusLikeCountQuery);

    return true;

}

export const subLikeCount = async(shopId, connection)=>{

    const subLikeCountQuery = `update shop set like_count = like_count- 1 where id = ${shopId};`;
    const [plusLikeCountResult] = await connection.query(subLikeCountQuery);

    return true;

}