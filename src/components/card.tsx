import type React from "react";
import type { CardData } from "../App";
import { cn } from "../lib/utils";
const Card: React.FC<
  CardData & { handleAddFilter: (filter: string) => void }
> = ({
  logo,
  id,
  company,
  featured,
  new: isNew,
  tools,
  languages,
  position,
  role,
  level,
  location,
  postedAt,
  contract,
  handleAddFilter,
}) => {
  return (
    <div
      className={cn(
        "w-full bg-white rounded-sm shadow-card-shadow before:content-[''] before:h-full before:absolute before:w-1 before:bg-esaturated-dark-cyan  relative before:left-0",
        id > 2 && "before:hidden"
      )}
    >
      <div className="p-8 pl-11 flex items-start md:items-center justify-between max-md:flex-col">
        <div className=" flex items-center gap-6 relative">
          <img src={logo} className="h-16 w-16 md:h-20 md:w-20 max-md:absolute -top-16 " />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-xl text-esaturated-dark-cyan">
                {company}
              </h2>
              {isNew && (
                <Badge
                  label="New!"
                  className="bg-esaturated-dark-cyan"
                  handleClick={handleAddFilter}
                />
              )}
              {featured && (
                <Badge
                  label="Featured"
                  className="bg-very-dark-grayish-cyan"
                  handleClick={handleAddFilter}
                />
              )}
            </div>
            <p className="my-2 font-bold text-xl text-very-dark-grayish-cyan">
              {position}
            </p>
            <p className="flex gap-2 items-center text-gray-500 font-semibold">
              {location}
              <Dot />
              {postedAt}
              <Dot />
              {contract}
            </p>
          </div>
        </div>
        <div className="flex items-center max-md:flex-wrap gap-3">
          {[role, level, ...tools, ...languages].map((item) => (
            <Badge
              handleClick={handleAddFilter}
              key={item}
              label={item}
              className="rounded bg-light-grayish-cyan-200 capitalize font-medium text-md text-esaturated-dark-cyan"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

const Badge = ({
  className,
  label,
  handleClick,
}: {
  label: string;
  handleClick: (filter: string) => void;
  className?: string;
}) => (
  <button
    onClick={() => handleClick(label)}
    className={cn(
      "px-3 py-1 text-xs  uppercase text-white rounded-full cursor-pointer hover:bg-esaturated-dark-cyan hover:text-white transition-colors duration-300 ",
      className
    )}
  >
    {label}
  </button>
);

const Dot = () => <span className="w-1 h-1 rounded-full  bg-gray-400 " />;
