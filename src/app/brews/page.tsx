import { BrewCard } from "@/components/brews/brew-card/brew-card";
import AddBrew from "@/components/brews/add-brew/add-brew";
import { getAllBrews } from "@/lib/brews/actions";

export default async function Brews() {
  const brews = await getAllBrews(2);

  console.log({ brews });

  const renderBrewCards = () => {
    return brews.map((brew) => (
      <BrewCard
        key={brew.id}
        id={brew.id}
        name={brew.name}
        description={brew.description}
        temperature={brew.temperature}
        grind={brew.grind}
        weight={brew.weight}
        image={brew.image}
        updatedAt={brew.updatedAt}
      />
    ));
  };

  return (
    <div className="grid auto-rows-[150px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
      {renderBrewCards()}
      <AddBrew />
    </div>
  );
}
