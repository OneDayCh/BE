export const selectNails = async (conn, order = 'popular', filter = {}) => {
  const NAIL_LIST_ORDER = {
    popular: `like_count desc`,
    low_to_high: `price asc`,
    high_to_low: `price desc`,
  };
  
  let filterQuery = `1=1`;
  if (filter.minPrice !== undefined) {
    filterQuery += ` and price >= ${filter.minPrice}`;
  }
  if (filter.maxPrice !== undefined) {
    filterQuery += ` and price <= ${filter.maxPrice}`;
  }

  const selectNailQuery = `select * from nail a join shop b on a.shop_id = b.id 
  where ${filterQuery} order by ${NAIL_LIST_ORDER[order]};`;
  const [selectNailRow] = await conn.query(selectNailQuery);
  return selectNailRow;
};

export const selectNailById = async (conn, nailId) => {
  const selectNailQuery = `select * from nail a join shop b on a.shop_id = b.id where a.id = ?;`;
  const [selectNailRow] = await conn.query(selectNailQuery, nailId);
  return selectNailRow;
};
