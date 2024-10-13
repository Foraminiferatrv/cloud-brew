import Image from "next/image";
import { ImgPlaceholder } from "@/components/global/img-placeholder/img-placeholder";
import Link from "next/link";
import AddBrewIcon from "@/assets/img/add-brew.svg";

function AddBrew() {
  return (
    <div
      title="Create new brew"
      className="flex cursor-pointer items-center justify-center rounded-lg bg-white p-5 shadow-neo hover:scale-105"
    >
      <div className="size-24 overflow-hidden rounded-full py-6 px-4  shadow-neo-light-inset">
        <AddBrewIcon className="[&>path]:drop-shadow-neo_contrast [&>path]:fill-gray-400" />
      </div>
    </div>
  );
}

export default AddBrew;
