import pool from '../config/database';
import baseResponse from "../config/baseResponse";
import { errResponse } from "../config/response";
import * as nailDao from "./nailDao";

export const getNails = async (order, filter) => {
  try {
    const connection = await pool.getConnection();
    const result = nailDao.selectNails(connection, order, filter);
    return result;
  } catch (error) {
    console.error(error);
    return errResponse(baseResponse.DB_ERROR);
  }
}

export const getNailById = async (nailId) => {
  try {
    const connection = await pool.getConnection();
    const result = nailDao.selectNailById(connection, nailId);
    return result;
  } catch (error) {
    console.error(error);
    return errResponse(baseResponse.DB_ERROR);
  }
}
