import { drizzle } from "drizzle-orm/postgres-js";

import * as user_schema from "@/db/schema/users.schema";
import * as brew_schema from "@/db/schema/brew.schema";

import postgres from "postgres";

const schema = { ...user_schema, ...brew_schema };

const queryClient = postgres(process.env.DATABASE_URL as string);

export const db = drizzle(queryClient, { schema });
