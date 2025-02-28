import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    host: "dpg-cuu8e8a3esus73eh0u2g-a",
    port: 5432,
    database: "task_manager_db_1v1p",
    user: "task_manager_db_1v1p_user",
    password: "VvEbdNufAd7uslzHBXRlMPKxyHiAbCno",
    ssl: false,
  },
});
