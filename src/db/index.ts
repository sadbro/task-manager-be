import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: "postgresql://task_manager_db_1v1p_user:VvEbdNufAd7uslzHBXRlMPKxyHiAbCno@dpg-cuu8e8a3esus73eh0u2g-a.oregon-postgres.render.com/task_manager_db_1v1p",
});

export const db = drizzle(pool);
