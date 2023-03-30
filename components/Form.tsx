import { Input } from "components/Input";
import { Button } from "components/Button";
import getPrompt from "utils/getPrompt";
import create from "utils/api/create";
import REVIEW_INPUT_INFO from "constants/reviewInputInfo";

interface FormProps {
  setReview: React.Dispatch<React.SetStateAction<string>>;
  setIsReadOnly: React.Dispatch<React.SetStateAction<boolean>>;
}

function Form({ setReview, setIsReadOnly }: FormProps) {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const prompt = getPrompt(event.target);

    setReview(await create(prompt));
    setIsReadOnly(true);
  };

  return (
    <form id="review" onSubmit={onSubmit} className="flex flex-col gap-y-2">
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

      <Button type="submit" className="mt-6">
        리뷰 생성하기
      </Button>
    </form>
  );
}

export default Form;
