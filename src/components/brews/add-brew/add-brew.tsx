import Link from "next/link";
import AddBrewIcon from "@/assets/img/add-brew.svg";
import { smallint, text, varchar } from "drizzle-orm/pg-core";
import { useForm } from "react-hook-form";

function AddBrew() {
  return (
    <Link
      href="/brews/new-brew"
      title="Create new brew"
      className="flex cursor-pointer items-center justify-center rounded-lg bg-white p-5 shadow-neo hover:scale-105"
    >
      <div className="size-24 overflow-hidden rounded-full px-4 py-6 shadow-neo-light-inset">
        <AddBrewIcon className="[&>path]:fill-gray-400 [&>path]:drop-shadow-neo_contrast" />
      </div>
    </Link>
  );
}

export default AddBrew;
