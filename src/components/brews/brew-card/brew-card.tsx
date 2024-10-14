import Image from "next/image";
import { ImgPlaceholder } from "@/components/global/img-placeholder/img-placeholder";
import Link from "next/link";

type Props = {
  name: string;
  description?: string | null;
  image?: string | null;
  temperature?: number | null;
  grind?: number | null;
  weight?: number | null;
  updatedAt: string | null | Date;
  id: number;
};

export function BrewCard({ name, description, image, id }: Props) {
  return (
    <Link
      href={`/brews/${id}`}
      className="cursor-pointer rounded-lg bg-white p-5 shadow-neo hover:scale-105"
    >
      <div className="mb-2 flex items-center gap-3">
        <div className="size-12 overflow-hidden rounded-full">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="size-full"
            />
          ) : (
            <ImgPlaceholder />
          )}
        </div>
        <h1 className="text-lg font-bold">{name}</h1>
      </div>
      <p className="text-sm">{description}</p>
    </Link>
  );
}
