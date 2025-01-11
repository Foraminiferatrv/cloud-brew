"use client";
import { Card } from "@/components/ui/card";
import { EditableInput } from "@/components/ui/editable-input";
import Image from "next/image";
import { ImgPlaceholder } from "@/components/global/img-placeholder/img-placeholder";

type Props = {
  brew_id?: string;
  name?: string;
  image?: string;
};

export function BrewInfo({ brew_id, name, image }: Props) {
  const handleEditBrewName = (name: string) => {
    console.log(name);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Card className="min-h-[300px] max-w-[610px] p-4">
        <div className="">
          <EditableInput
            value={name}
            label="Brew name"
            onChange={handleEditBrewName}
          />
        </div>

        <div className="size-12 overflow-hidden rounded-full">
          {image ? (
            <Image
              src={image}
              alt={brew_id}
              width={40}
              height={40}
              className="size-full"
            />
          ) : (
            <ImgPlaceholder />
          )}
        </div>
      </Card>

      <Card className="min-h-[300px] max-w-[610px] p-4"></Card>
    </div>
  );
}
