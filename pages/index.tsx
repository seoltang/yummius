import { useState } from "react";
import { Input } from "components/Input";
import { Button } from "components/Button";
import getPrompt from "utils/getPrompt";
import create from "utils/api/create";
import REVIEW_INPUT_INFO from "constants/reviewInputInfo";

function Home() {
  const [review, setReview] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const prompt = getPrompt(event.target);

    setReview(await create(prompt));
  };

  return (
    <div className="flex flex-col gap-12 m-8">
      <section className="flex flex-col pt-2 text-center">
        <h1 className="font-title text-4xl text-tomato">쩝쩝박사</h1>
        <h2 className="mt-1 font-medium text-xl text-gray-400">
          맛집 리뷰 생성기
        </h2>
        <div className="mt-4">ChatGPT와 함께 맛집 리뷰를 작성해 보세요.</div>
      </section>

      <section className="flex flex-col gap-y-3">
        <form onSubmit={onSubmit} className="flex flex-col gap-y-2">
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

          <Button type="submit" className="mt-3">
            리뷰 생성하기
          </Button>
          <Button type="reset" className="mt-3">
            다시하기
          </Button>
        </form>
      </section>

      <section className="flex flex-col gap-3">
        {review && <div>{review}</div>}
        {/* TODO: 복사 버튼 */}
      </section>
    </div>
  );
}

export default Home;
