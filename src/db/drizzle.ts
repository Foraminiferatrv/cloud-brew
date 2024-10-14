// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// export const db = await drizzle(
//   "node-postgres",
//   process.env.DATABASE_URL as string,
// );
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
