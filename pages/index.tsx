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

  const onReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!confirm("입력한 글이 모두 지워집니다. 계속하시겠습니까?"))
      event.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 justify-center m-8">
      <section className="md:basis-1/2">
        <div className="flex flex-col min-h-[50%] border-2 border-gray-300 rounded-xl">
          {review ? (
            <div>{review}</div>
          ) : (
            <header className="flex flex-col m-auto p-8 text-center">
              <small className="text-right text-gray-500 tracking-[.16rem] leading-3">
                ChatGPT
              </small>
              <h1 className="font-title text-4xl text-tomato">쩝쩝박사</h1>
              <h2 className="mt-1 font-medium text-xl text-gray-400">
                맛집 리뷰 생성기
              </h2>
            </header>
          )}
          {/* TODO: 복사 버튼 */}
        </div>
      </section>

      <section className="md:basis-1/2 flex flex-col gap-y-3">
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

          <Button type="submit" className="mt-8">
            리뷰 생성하기
          </Button>
          <Button
            type="reset"
            onClick={onReset}
            isOutlined={true}
            className="mt-3"
          >
            다시하기
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Home;
