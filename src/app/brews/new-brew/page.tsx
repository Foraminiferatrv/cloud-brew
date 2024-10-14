"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { createBrew } from "@/lib/brews/actions";
import { NewBrewFormValues } from "@/app/brews/new-brew/models";

const newBrewDefaultValues = {
  name: "",
  description: "",
  grind: null,
  weight: null,
  temperature: null,
  image: null,
};

export default function NewBrewPage() {
  const { register, handleSubmit } = useForm<NewBrewFormValues>({
    defaultValues: newBrewDefaultValues,
  });

  const onSubmit: SubmitHandler<NewBrewFormValues> = async (data) => {
    // const vals = getValues();
    const vals = data;
    console.log(vals);
    const result = await createBrew(vals);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <label htmlFor="name">Name</label>
      <input type="text" {...register("name")} />

      <label htmlFor="weight">Weight</label>
      <input type="number" {...register("weight")} />

      <label htmlFor="grind">Grind</label>
      <input type="number" {...register("grind")} />

      <label htmlFor="temperature">Temperature</label>
      <input type="number" {...register("temperature")} />

      <label htmlFor="image">Image</label>
      <input type="file" {...register("image")} />

      <label htmlFor="description">Description</label>
      <textarea {...register("description")} />

      <button type="submit">SUBMIT</button>
    </form>
  );
}
