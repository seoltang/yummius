import { Chat } from "components/Chat";
import { Input } from "components/Input";
import REVIEW_INPUT_INFO from "constants/reviewInputInfo";

function Home() {
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
      </section>

      <section className="flex flex-col gap-3">
        <Chat />
      </section>
    </div>
  );
}

export default Home;
