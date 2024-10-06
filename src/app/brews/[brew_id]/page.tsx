"use client";

import { ROUTES } from "@/constants/routes.constant";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Brew() {
  const { brew_id } = useParams();

  return (
    <div>
      <Link href={ROUTES.BREWS}>{"< Back"}</Link>
      <div>
        Brew
        {brew_id}
      </div>
    </div>
  );
}
