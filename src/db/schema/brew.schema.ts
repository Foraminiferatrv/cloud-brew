import {
  pgEnum,
  pgTable,
  serial,
  smallint,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { user } from "@/db/schema/users.schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { relations, sql } from "drizzle-orm";

export const brew_events_enum = pgEnum("brew_event_type", [
  "GRIND_CHANGED",
  "TEMPERATURE_CHANGED",
  "WEIGHT_CHANGED",
  "COMMENT",
]);

export const brew = pgTable("brew", {
  id: serial("id").primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  grind: smallint(),
  weight: smallint(),
  temperature: smallint(),
  image: varchar({ length: 255 }),

  owner_id: serial("owner_id").references(() => user.id),

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
export const selectBrewSchema = createSelectSchema(brew);
export const inputBrewSchema = createInsertSchema(brew);

export const brew_event = pgTable("brew_event", {
  id: serial("id").primaryKey(),
  event_type: brew_events_enum().notNull(),
  new_temperature: smallint(),
  new_grind: smallint(),
  new_weight: smallint(),
  comment: text(),

  brew_id: serial("brew_id").references(() => brew.id),

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

export const selectBrewEventSchema = createSelectSchema(brew_event);
export const insertBrewEventSchema = createInsertSchema(brew);

//RELATIONS
export const BrewTableRelations = relations(brew, ({ one, many }) => {
  return {
    owner: one(user, {
      fields: [brew.owner_id],
      references: [user.id],
    }),
    events: many(brew_event),
  };
});

export const BrewEventTableRelations = relations(brew_event, ({ one }) => {
  return {
    brew: one(brew, {
      fields: [brew_event.brew_id],
      references: [brew.id],
    }),
  };
});
