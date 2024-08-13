import express from 'express';
import { adicionarHotel } from '../controller/hotelController.js'

const routes = express.Router();

routes.post('/', adicionarHotel);

export default routes;

