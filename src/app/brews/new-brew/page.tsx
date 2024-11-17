"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { createBrew } from "@/lib/brews/actions";
import { NewBrewFormValues } from "@/app/brews/new-brew/models";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import NameIcon from "@/assets/img/name.svg";
import TemperatureIcon from "@/assets/img/temp.svg";
import WeightIcon from "@/assets/img/weight.svg";
import GrindIcon from "@/assets/img/grind.svg";
import ImageIcon from "@/assets/img/image.svg";
import DescriptionIcon from "@/assets/img/description.svg";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { coffeeBrewMethods } from "@/constants/brew-methods.constant";
import PourOverIcon from "@/assets/img/pour-over.svg";

const newBrewDefaultValues: NewBrewFormValues = {
  name: "",
  description: "",
  grind: null,
  weight: null,
  temperature: null,
  image: null,
  method: null,
};

export default function NewBrewPage() {
  const router = useRouter();

  const { register, handleSubmit, getValues, setValue, watch } =
    useForm<NewBrewFormValues>({
      defaultValues: newBrewDefaultValues,
    });

  const onSubmit: SubmitHandler<NewBrewFormValues> = async (data) => {
    // const vals = getValues();
    const vals = data;
    console.log(vals);

    await createBrew(vals);
  };

  const handleCancel = () => {
    router.push("/brews");
  };

  const renderMethods = () => {
    return coffeeBrewMethods.map((method) => {
      return (
        <SelectItem
          value={method.value}
          key={method.value}
          className="cursor-pointer hover:bg-main_2"
        >
          <div className="flex items-center gap-2">
            <method.icon className="size-6" />
            <span>{method.label}</span>
          </div>
        </SelectItem>
      );
    });
  };

  const renderSelectedMethod = () => {
    const selectedMethod = coffeeBrewMethods.find(
      (method) => getValues("method") === method.value,
    );

    if (!selectedMethod) return null;

    return (
      <div className="flex items-center gap-4">
        <selectedMethod.icon className="size-6" />
        {selectedMethod?.label}
      </div>
    );
  };

  watch("method");

  return (
    <div className="align-center flex justify-center">
      <Card className="min-h-[600px] max-w-[610px] p-4">
        <h3 className="text-xl font-bold">Create New Brew</h3>

        <Separator className="my-4" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-full flex-col gap-4"
        >
          <Label className="flex w-[108px] items-center gap-2" htmlFor="name">
            <NameIcon className="size-5" /> Name *
          </Label>
          <Input
            type="text"
            {...register("name")}
            placeholder="Enter brew name"
          />

          <Separator className="my-4" />

          <div className="col-span-1 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex justify-between gap-2">
              <Label
                className="flex min-w-[110px] items-center gap-2"
                htmlFor="weight"
              >
                <WeightIcon className="size-5" /> Weight (g)
              </Label>
              <Input
                type="number"
                className="w-[140px]"
                placeholder="Enter weight"
                {...register("weight")}
              />
            </div>

            <div className="flex justify-between gap-2">
              <Label
                className="flex min-w-[110px] items-center gap-2"
                htmlFor="grind"
              >
                <GrindIcon className="size-5" /> Grind size (clicks)
              </Label>
              <Input
                type="number"
                className="w-[140px]"
                placeholder="Enter grind size"
                {...register("grind")}
              />
            </div>

            <div className="flex justify-between gap-2">
              <Label className="flex items-center gap-2" htmlFor="temperature">
                <TemperatureIcon className="size-5" /> Temperature (°C)
              </Label>
              <Input
                type="number"
                className="w-[140px] text-ellipsis"
                placeholder="Enter temperature"
                {...register("temperature")}
              />
            </div>

            <div className="flex justify-between gap-2">
              <Label className="flex w-[110px] items-center" htmlFor="method">
                <PourOverIcon className="size-5" /> Brew method
              </Label>
              <Select
                name="method"
                onValueChange={(val) =>
                  setValue("method", val, {
                    shouldDirty: true,
                    shouldTouch: true,
                  })
                }
              >
                <SelectTrigger className="w-[140px] [&:placeholer]:text-red-500">
                  <SelectValue placeholder="Select method">
                    {renderSelectedMethod()}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>{renderMethods()}</SelectContent>
              </Select>
            </div>
          </div>

          <Separator className="my-4" />

          <Label className="flex items-center gap-2" htmlFor="image">
            <ImageIcon className="size-5" /> Image
          </Label>
          <Input type="file" {...register("image")} />

          <Label className="flex items-center gap-2" htmlFor="description">
            <DescriptionIcon className="size-5" /> Description
          </Label>
          <Textarea
            className="min-h-[150px]"
            {...register("description")}
            placeholder="Add brew description..."
          />

          <div className="flex justify-between gap-4 self-end justify-self-end">
            <Button
              type="button"
              className="w-32 bg-white text-black hover:text-white"
              onClick={handleCancel}
            >
              Cancel
            </Button>

            <Button type="submit" className="w-32">
              Create brew
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
