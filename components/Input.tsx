import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  type IconDefinition,
  faStore,
  faLocationDot,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import type { ReviewInputInfo } from "types/review";

const icon: { [key: string]: IconDefinition } = {
  name: faStore,
  location: faLocationDot,
  food: faUtensils,
};

export const Input = ({
  type,
  name,
  description,
  example,
  isRequired,
  isLongAnswer,
}: ReviewInputInfo) => {
  const [isChecked, setIsChecked] = useState(false);

  const changeChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const height = isRequired
    ? "mb-2"
    : isChecked
    ? "mb-2 h-20"
    : "mb-0 py-0 h-0 border-0 overflow-y-hidden focus:border-0 focus:ring-0";

  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-center gap-x-1.5">
        {isRequired ? (
          <FontAwesomeIcon
            icon={icon[type]}
            className="w-4 h-4 text-gray-300"
          />
        ) : (
          <input
            type="checkbox"
            name={name}
            checked={isChecked}
            onChange={changeChecked}
            className="h-4 w-4 rounded-full border-gray-300 text-tomato cursor-pointer focus:ring-peach"
          />
        )}

        <div className="flex items-baseline">
          <label
            htmlFor={name}
            className="block font-semibold text-tomato whitespace-nowrap"
          >
            {name}
          </label>

          {description && (
            <div className="ml-2 text-sm text-gray-600">{description}</div>
          )}
        </div>
      </div>

      {isLongAnswer ? (
        <textarea
          name={name}
          id={name}
          placeholder={example}
          required={isRequired}
          rows={4}
          className={`${height} block w-full rounded-md border-none shadow-inner shadow-gray-200/75 transition-box resize-none focus:ring-2 focus:ring-peach placeholder:text-gray-400`}
        />
      ) : (
        <input
          type="text"
          name={name}
          id={name}
          placeholder={example}
          required={isRequired}
          className="block mb-2 w-full rounded-md border-none shadow-inner shadow-gray-200/75 focus:ring-2 focus:ring-peach placeholder:text-gray-400"
        />
      )}
    </div>
  );
};
