import { ROUTES } from "@/constants/routes.constant";
import Link from "next/link";
// import { useParams } from "next/navigation";
import { getBrewById } from "@/lib/brews/actions";

type Props = {
  params: {
    brew_id?: string;
  };
};

export default async function Brew({ params: { brew_id } }: Props) {
  // const { brew_id } = useParams();
  const result = await getBrewById(brew_id);

  // const {
  //   name,
  //   description,
  //   image,
  //   id,
  //   weight,
  //   updatedAt,
  //   temperature,
  //   grind,
  // } = result;

  return (
    <div>
      <Link href={ROUTES.BREWS}>{"< Back"}</Link>
      <div>
        Brew
        {}
      </div>
    </div>
  );
}
