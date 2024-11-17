import { ROUTES } from "@/constants/routes.constant";
import Link from "next/link";
// import { useParams } from "next/navigation";
import { getBrewById } from "@/lib/brews/actions";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import NameIcon from "@/assets/img/name.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ImgPlaceholder } from "@/components/global/img-placeholder/img-placeholder";
import { EditableInput } from "@/components/ui/editable-input";

type Props = {
  params: {
    brew_id?: string;
  };
};

export default async function Brew({ params: { brew_id } }: Props) {
  const result = await getBrewById(brew_id);

  const {
    name,
    description,
    image,
    id,
    weight,
    updatedAt,
    temperature,
    grind,
  } = result;

  return (
    <div>
      <Link href={ROUTES.BREWS}>
        <Button
          type="button"
          className="w-20 bg-white text-black hover:text-white"
        >
          {"< Back"}
        </Button>
      </Link>

      <div className="flex flex-col items-center justify-center gap-4">
        <Card className="min-h-[300px] max-w-[610px] p-4">
          <div className="">
            <EditableInput value={name} />
            {/*<Input type="text" placeholder="Enter brew name" />*/}
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
    </div>
  );
}
