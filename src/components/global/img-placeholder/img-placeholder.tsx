import FlaskCoffee from "@/assets/img/flask-coffee.svg";

export function ImgPlaceholder() {
  return (
    <div className="img_placeholder size-full rounded-full bg-white p-2 shadow-neo-light-inset">
      <FlaskCoffee className="[&>path]:drop-shadow-neo_contrast size-full [&>path]:fill-bg_1" />
    </div>
  );
}
