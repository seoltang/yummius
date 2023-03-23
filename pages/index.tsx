import { useState } from "react";=
import { Input } from "components/Input";
import getPrompt from "utils/getPrompt";
import REVIEW_INPUT_INFO from "constants/reviewInputInfo";
import create from "./api/create";

function Home() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const prompt = getPrompt(event.target);

    setResult(await create(prompt));
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
        <form onSubmit={onSubmit}>
          {REVIEW_INPUT_INFO.map(
            ({ id, name, description, example, isRequired, isLongAnswer }) => (
              <Input
                key={id}
                id={id}
                name={name}
                description={description}
                example={example}
                isRequired={isRequired}
                isLongAnswer={isLongAnswer}
              />
            )
          )}

          <button type="submit">리뷰 생성하기</button>
          <button type="reset">다시하기</button>
        </form>
      </section>

      <section className="flex flex-col gap-3">
        {result && <div>{result}</div>}
        {/* TODO: 복사 버튼 */}
      </section>
    </div>
  );
}

export default Home;
