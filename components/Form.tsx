import { CircularProgress } from "@mui/joy";
import { Input } from "components/Input";
import { Button } from "components/Button";
import getPrompt from "utils/getPrompt";
import create from "utils/api/create";
import REVIEW_INPUT_INFO from "constants/reviewInputInfo";

interface FormProps {
  setReview: React.Dispatch<React.SetStateAction<string>>;
  setIsReadOnly: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Form({
  setReview,
  setIsReadOnly,
  isLoading,
  setIsLoading,
}: FormProps) {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const prompt = getPrompt(event.target);
    setReview(await create(prompt));

    setIsReadOnly(true);
    setIsLoading(false);
  };

  return (
    <form
      id="review"
      name="review"
      onSubmit={onSubmit}
      className="flex flex-col gap-y-2"
    >
      {REVIEW_INPUT_INFO.map(
        ({
          id,
          name,
          type,
          description,
          example,
          isRequired,
          isLongAnswer,
        }) => (
          <Input
            key={id}
            id={id}
            type={type}
            name={name}
            description={description}
            example={example}
            isRequired={isRequired}
            isLongAnswer={isLongAnswer}
          />
        )
      )}

      <Button
        type="submit"
        disabled={isLoading}
        className="mt-6 disabled:bg-gradient-to-r disabled:from-tomato disabled:via-dark-yellow disabled:to-tomato disabled:bg-[length:200%] disabled:animate-gradient disabled:border-transparent disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100"
      >
        {isLoading ? (
          <>
            <CircularProgress
              color="neutral"
              variant="plain"
              sx={{
                "--CircularProgress-progressColor": "white",
                "--CircularProgress-size": "16px",
                "--CircularProgress-trackThickness": "3px",
                "--CircularProgress-progressThickness": "3px",
              }}
              className="align-middle"
            />
            <span className="ml-2">리뷰 생성 중...</span>
          </>
        ) : (
          "리뷰 생성하기"
        )}
      </Button>
    </form>
  );
}

export default Form;
