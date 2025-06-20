import Card from "./components/card";
import cardData from "./assets/data/data";
import headerImageDesktop from "@/assets/images/bg-header-desktop.svg";
import { useState } from "react";

export type CardData = (typeof cardData)[0];
const App = () => {
  const [filters, setFilters] = useState<string[]>([]);
  return (
    <div className="min-h-[100dvh] bg-light-grayish-cyan-100">
      <header className="w-full max-h-80 bg-esaturated-dark-cyan min-h-40 relative">
        <img
          src={headerImageDesktop}
          className="absolute w-full h-full object-cover "
        />
      </header>
      <div className="bg-white shadow-card-shadow"></div>
      <main className="flex flex-col items-center justify-center mx-auto max-w-5xl gap-8 mt-14">
        {cardData.map((data) => (
          <Card
            key={data.id}
            filters={filters}
            setFilters={setFilters}
            {...data}
          />
        ))}
      </main>
    </div>
  );
};
export default App;
