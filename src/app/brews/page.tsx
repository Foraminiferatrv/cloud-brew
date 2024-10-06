import { BrewCard } from "@/components/global/brew-card/brew-card";

export default function Brews() {
  const brews = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `Brew ${i}`,
    description: `Brew ${i} description`,
    image:
      i === 7 || i === 3 || i === 0
        ? ""
        : `https://picsum.photos/id/${i + 20}/200/300`,
  }));

  const renderBrewCards = () => {
    return brews.map((brew) => (
      <BrewCard
        key={brew.id}
        id={brew.id}
        name={brew.name}
        description={brew.description}
        image={brew.image}
      />
    ));
  };

  return (
    <div className="grid auto-rows-[150px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
      {renderBrewCards()}
    </div>
  );
}
