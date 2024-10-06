import Logo from "@/assets/img/logo.svg";

export default function BgLogo() {
  return (
    <div className="shadow-neo-light-inset fixed left-1/2 top-1/2 z-0 aspect-square h-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-main p-12">
      <Logo className="[&>path]:drop-shadow-neo_light size-full [&>path]:fill-main" />
    </div>
  );
}
