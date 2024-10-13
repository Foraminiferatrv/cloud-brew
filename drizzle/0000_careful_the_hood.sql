DO $$ BEGIN
 CREATE TYPE "public"."brew_event_type" AS ENUM('GRIND_CHANGED', 'TEMPERATURE_CHANGED', 'WEIGHT_CHANGED', 'COMMENT');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "brew" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"grind" smallint,
	"weight" smallint,
	"temperature" smallint,
	"owner_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "brew_event" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_type" "brew_event_type" NOT NULL,
	"new_temperature" smallint,
	"new_grind" smallint,
	"new_weight" smallint,
	"comment" text,
	"brew_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "brew" ADD CONSTRAINT "brew_owner_id_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "brew_event" ADD CONSTRAINT "brew_event_brew_id_brew_id_fk" FOREIGN KEY ("brew_id") REFERENCES "public"."brew"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
