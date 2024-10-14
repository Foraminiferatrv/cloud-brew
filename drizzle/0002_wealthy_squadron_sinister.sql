ALTER TABLE "brew" ADD COLUMN "created_at" timestamp (3) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "brew" ADD COLUMN "updated_at" timestamp (3) with time zone;--> statement-breakpoint
ALTER TABLE "brew_event" ADD COLUMN "created_at" timestamp (3) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "brew_event" ADD COLUMN "updated_at" timestamp (3) with time zone;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "created_at" timestamp (3) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "updated_at" timestamp (3) with time zone;