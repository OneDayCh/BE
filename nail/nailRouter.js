import express from 'express';
import { getNailDetail, getNails } from './nailController';

const nailRouter = express.Router();

nailRouter.get('/', getNails);
nailRouter.get('/:nailId', getNailDetail);

export default nailRouter;
