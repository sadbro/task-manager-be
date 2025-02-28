import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: "postgresql://task_manager_db_1v1p_user:VvEbdNufAd7uslzHBXRlMPKxyHiAbCno@dpg-cuu8e8a3esus73eh0u2g-a.oregon-postgres.render.com/task_manager_db_1v1p",
  ssl: {
    rejectUnauthorized: false,
  }
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

pool.on("connect", () => {
  console.log("DB Connected!");
})

export const db = drizzle({
  client: pool
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("Database connection successful");
    client.release();
    return true;
  } catch (err) {
    console.error("Database connection error:", err);
    return false;
  }
}

testConnection();
