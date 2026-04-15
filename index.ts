import express from 'express';
import cors from 'cors';
import router from './src/routes/user.js'; 
import { errorHandler } from './src/middleware/errorHandler.js';

const app = express();
const PORT = 5000;

// 1. General Middleware
app.use(cors());
app.use(express.json()); 

// 2. Routes
app.use('/api/posts', router);

// 3. Error Handler 
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/api/posts`);
});