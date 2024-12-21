import express from 'express';
import dotenv from 'dotenv';
import weatherRoutes from './src/routes/weatherRoutes.js'; 
import cors from 'cors'

dotenv.config(); 

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use('/api', weatherRoutes); 

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
