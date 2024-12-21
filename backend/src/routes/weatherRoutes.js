import express from 'express';
import { getWeather } from '../controllers/weatherControllers.js';

const router = express.Router();

// Endpoint untuk mendapatkan cuaca berdasarkan kota
router.get('/weather', getWeather);

export default router;