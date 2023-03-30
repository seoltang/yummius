import { FormEvent, useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Tooltip from "@mui/joy/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";

interface ReviewProps {
  review: string;
  setReview: React.Dispatch<React.SetStateAction<string>>;
  isReadOnly: boolean;
  setIsReadOnly: React.Dispatch<React.SetStateAction<boolean>>;
}

function Review({ review, setReview, isReadOnly, setIsReadOnly }: ReviewProps) {
  console.log("review", review);

  const onInput = (event: FormEvent<HTMLTextAreaElement>) => {
    setReview(event.currentTarget.value);
  };

  const edit = () => {
    setIsReadOnly((prev) => !prev);
  };

  const copy = () => {};

  return (
    <div className="w-full p-6 md:px-8 md:pt-8 rounded-xl bg-gradient-to-br from-light-yellow to-coral shadow-lg">
      {isReadOnly ? (
        <div className="whitespace-pre-wrap">{review}</div>
      ) : (
        <TextareaAutosize
          defaultValue={review}
          onInput={onInput}
          autoFocus
          spellCheck={false}
          className="w-full p-0 bg-transparent border-none resize-none focus:ring-0"
        />
      )}

      <div className="flex justify-end gap-x-3 pt-2">
        <Tooltip title={isReadOnly ? "편집" : "저장"} size="sm" arrow>
          <button
            onClick={edit}
            className="leading-[0] text-white active:text-tomato lg:hover:text-tomato"
          >
            <FontAwesomeIcon icon={isReadOnly ? faPen : faCheck} size="1x" />
          </button>
        </Tooltip>

        <Tooltip title="복사" size="sm" arrow>
          <button
            onClick={copy}
            className="leading-[0] text-white active:text-tomato lg:hover:text-tomato"
          >
            <FontAwesomeIcon icon={faCopy} size="1x" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

export default Review;
