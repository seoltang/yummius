import { ChangeEvent, useState } from "react";
import type { ReviewInputInfo } from "types/review";

export const Input = ({
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
        {isRequired || (
          <input
            type="checkbox"
            checked={isChecked}
            onChange={changeChecked}
            className="h-4 w-4 rounded-full border-gray-300 text-tomato cursor-pointer focus:ring-peach"
          />
        )}

        <div className="flex items-baseline">
          <label
            htmlFor={name}
            className="block font-medium text-tomato whitespace-nowrap"
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
          rows={4}
          className={`${height} block w-full rounded-md border-gray-300 transition-box resize-none focus:border-peach focus:ring-peach placeholder:text-gray-400`}
        />
      ) : (
        <input
          type="text"
          name={name}
          id={name}
          placeholder={example}
          className="block mb-2 w-full rounded-md border-gray-300 focus:border-peach focus:ring-peach placeholder:text-gray-400"
        />
      )}
    </div>
  );
};
