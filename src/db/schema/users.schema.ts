import {
  integer,
  pgEnum,
  pgTable,
  serial,
  smallint,
  text,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const brew_events_enum = pgEnum("brew_event_type", [
  "GRIND_CHANGED",
  "TEMPERATURE_CHANGED",
  "WEIGHT_CHANGED",
  "COMMENT",
]);

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  username: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

export const brew = pgTable("brew", {
  id: serial("id").primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  grind: smallint(),
  weight: smallint(),
  temperature: smallint(),

  owner_id: serial("owner_id").references(() => user.id),
});

export const brew_event = pgTable("brew_event", {
  id: serial("id").primaryKey(),
  event_type: brew_events_enum().notNull(),
  new_temperature: smallint(),
  new_grind: smallint(),
  new_weight: smallint(),
  comment: text(),

  brew_id: serial("brew_id").references(() => brew.id),
});
