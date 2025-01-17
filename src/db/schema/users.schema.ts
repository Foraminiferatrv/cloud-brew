import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { relations, sql } from "drizzle-orm";
import { brew } from "@/db/schema/brew.schema";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  username: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  image: varchar({ length: 255 }),

  createdAt: timestamp("created_at", {
    mode: "date",
    precision: 3,
    withTimezone: true,
  })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", {
    mode: "date",
    precision: 3,
    withTimezone: true,
  }).$onUpdate(() => new Date()),
});
export const selectUserSchema = createSelectSchema(user);
export const insertUserSchema = createInsertSchema(user);

//RELATIONS

export const UserTableRelations = relations(user, ({ one, many }) => {
  return {
    brews: many(brew),
  };
});
