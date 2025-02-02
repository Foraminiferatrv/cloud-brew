import Link from "next/link";
import { ROUTES } from "@/constants/routes.constant";

export default function Signup() {
  return (
    <div>
      login
      <br />
      <Link className="text-blue-500" href={ROUTES.SIGNUP}>
        Signup
      </Link>
    </div>
  );
}
