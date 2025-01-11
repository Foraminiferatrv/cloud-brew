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

export default async function Brew({ params }: Props) {
  const { brew_id } = await params;
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

  const handleEditBrewName = async (formData: FormData) => {
    "use server";
    const newName = formData;
    
    console.log({ name });
  };

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

      <form className="flex flex-col items-center justify-center gap-4">
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
      </form>
    </div>
  );
}
