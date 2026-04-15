import mysql, {Pool} from 'mysql2/promise';
import dotenv from'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.details') });
// Update these values for your MySQL server
const pool:Pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: String(process.env.DB_PASSWORD) || '123LgamCdlsu456!',
    database: String(process.env.DB_NAME) || "myDB",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: Number(process.env.DB_PORT) || 3306
});

async function checkDbConnection() {
    try {
        const conn = await pool.getConnection();
        await conn.ping();
        console.log('MySQL database connection successful');
        conn.release();
    } catch (error) {
        console.error('MySQL database connection failed:', (error as Error).message);
    }
}
checkDbConnection();

export default pool;