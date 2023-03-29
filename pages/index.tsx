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
      <section
        className={`${
          review ? "md:basis-1/2" : "md:basis-full"
        } flex flex-col gap-y-3`}
      >
        <header className="flex flex-col mx-auto md:ml-0">
          <small className="text-right text-gray-600 tracking-[.16rem] leading-3">
            ChatGPT
          </small>
          <h1 className="font-title text-4xl text-tomato text-center">
            쩝쩝박사
          </h1>
        </header>

        <div className="pt-4 pb-2 break-keep">
          맛집 리뷰에 필요한 정보를 입력하고 ChatGPT로 리뷰를 생성해 보세요.
        </div>

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
      </section>

      {review && (
        <section className="flex flex-col items-center justify-between md:basis-1/2">
          <div className="w-full p-6 md:p-8 rounded-xl bg-gradient-to-br from-light-yellow to-coral shadow-lg whitespace-pre-wrap">
            {review.trim()}
            {/* TODO: 복사 버튼 */}
          </div>

          <Button
            type="reset"
            form="review"
            onClick={onReset}
            isOutlined={true}
            className="mt-10"
          >
            다시하기
          </Button>
        </section>
      )}
    </div>
  );
}

export default Home;
