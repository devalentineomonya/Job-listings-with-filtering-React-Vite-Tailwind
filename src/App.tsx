import { useState } from "react";
import Card from "./components/card";
import cardData from "./assets/data/data";
import headerImageDesktop from "@/assets/images/bg-header-desktop.svg";
import closeIcon from "./assets/images/icon-remove.svg";
export type CardData = (typeof cardData)[0];

const App = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const removeFilter = (filterToRemove: string) => {
    setFilters((prevFilters) =>
      prevFilters.filter((filter) => filter !== filterToRemove)
    );
  };

  const addFilter = (newFilter: string) => {
    setFilters((prevFilters) => {
      if (!prevFilters.includes(newFilter)) {
        return [...prevFilters, newFilter];
      }
      return prevFilters;
    });
  };

  return (
    <div className="min-h-[100dvh] bg-light-grayish-cyan-100">
      <header className="w-full max-h-80 bg-esaturated-dark-cyan min-h-40 relative">
        <img
          src={headerImageDesktop}
          className="absolute w-full h-full object-cover "
        />
      </header>
      {filters.length > 0 && (
        <div className="bg-white shadow-card-shadow w-full py-4 max-w-5xl mx-auto px-4 flex items-center justify-between gap-3">
          <div className=" flex items-center gap-3 flex-wrap">
            {filters.map((filter) => (
              <BadgeItem
                key={filter}
                filter={filter}
                removeFilter={removeFilter}
              />
            ))}
          </div>
          <button
            className="text-esaturated-dark-cyan font-semibold text-lg underline cursor-pointer"
            onClick={() => setFilters([])}
          >
            Clear
          </button>
        </div>
      )}
      <main className="flex flex-col items-center justify-center mx-auto max-w-5xl gap-8 mt-14">
        {cardData
          .filter((data) => {
        const allTags = [data.role, data.level, ...data.tools, ...data.languages];
        return filters.every((filter) => allTags.includes(filter));
          })
          .map((data) => (
        <Card key={data.id} handleAddFilter={addFilter} {...data} />
          ))}
      </main>
    </div>
  );
};
export default App;

const BadgeItem = ({
  filter,
  removeFilter,
}: {
  filter: string;
  removeFilter: (filter: string) => void;
}) => (
  <button className="h-7 bg-light-grayish-cyan-100 rounded flex items-center gap-x-2 overflow-hidden text-esaturated-dark-cyan font-bold shrink-0">
    <span className="pl-2">{filter}</span>
    <button
      className="bg-esaturated-dark-cyan h-full min-w-7 grid place-content-center cursor-pointer transition-colors duration-300 hover:bg-very-dark-grayish-cyan"
      onClick={() => removeFilter(filter)}
    >
      <img src={closeIcon} />
    </button>
  </button>
);
