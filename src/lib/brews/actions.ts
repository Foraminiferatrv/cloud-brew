"use server";

import { NewBrewFormValues } from "@/app/brews/new-brew/models";
import { db } from "@/db/drizzle";
import { user } from "@/db/schema/users.schema";
import { eq } from "drizzle-orm";
import { brew, selectBrewSchema } from "@/db/schema/brew.schema";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const getAllBrews = async (userId: number) => {
  return db.select().from(brew).where(eq(brew.owner_id, userId));
};

export const createBrew = async (data: NewBrewFormValues) => {
  const { name, grind, weight, temperature, image, description } = data;

  const userId = 2; //TODO:Boilerplate remove

  const targetUser = await db
    .select()
    .from(user)
    .where(eq(user.id, userId))
    .execute();

  if (targetUser.length === 0) {
    throw new Error("User not found");
  }

  const [result] = await db
    .insert(brew)
    .values({
      name,
      grind,
      weight,
      temperature,
      image,
      description,
      owner_id: userId,
    })
    .returning();

  if (result.id) {
    revalidatePath("/brews");
    redirect(`/brews/${result.id}`);
  }
};
