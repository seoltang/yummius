import { FormEvent, useEffect, useState } from "react";
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
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;

    const copyTimeOut = setTimeout(() => {
      setIsCopied(false);
    }, 1000);

    return () => clearTimeout(copyTimeOut);
  }, [isCopied]);

  const onInput = (event: FormEvent<HTMLTextAreaElement>) => {
    setReview(event.currentTarget.value);
  };

  const edit = () => {
    setIsReadOnly((prev) => !prev);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(review);
      setIsCopied(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full p-6 md:px-8 md:pb-8 rounded-xl bg-gradient-to-br from-light-yellow to-coral shadow-lg">
      <div className="flex justify-between gap-x-3 pb-3 leading-[0] text-white">
        <h3 className="text-2xl font-title text-white text-shadow">쩝쩝리뷰</h3>

        <div className="flex gap-x-3">
          <Tooltip
            title={isReadOnly ? "편집" : "편집 완료"}
            size="sm"
            placement="top"
            arrow
          >
            <button
              onClick={edit}
              className="active:text-tomato lg:hover:text-tomato"
            >
              <FontAwesomeIcon icon={isReadOnly ? faPen : faCheck} size="1x" />
            </button>
          </Tooltip>

          <Tooltip
            title={isCopied ? "복사 완료!" : "복사"}
            leaveDelay={isCopied ? 800 : 0}
            color={isCopied ? "success" : "neutral"}
            size="sm"
            placement="top"
            arrow
          >
            <button
              onClick={copy}
              disabled={isCopied}
              className={
                isCopied
                  ? "text-success"
                  : "active:text-tomato lg:hover:text-tomato"
              }
            >
              <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} size="1x" />
            </button>
          </Tooltip>
        </div>
      </div>

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
    </div>
  );
}

export default Review;
