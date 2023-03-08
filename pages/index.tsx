import { Chat } from "../components/Chat";
import { Input } from "../components/Input";

function Home() {
  return (
    <div className="flex flex-col gap-12 m-8">
      <section className="flex flex-col pt-2 text-center">
        <h1 className="font-title text-4xl text-tomato">쩝쩝박사</h1>
        <h2 className="mt-1 font-medium text-xl text-gray-500">
          맛집 리뷰 생성기
        </h2>
        <div className="mt-4">
          ChatGPT와 함께 맛집 리뷰를 빠르게 작성해 보세요.
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <Input name="가게 이름" />
        <Input name="가게 위치" />
        <Input name="먹은 메뉴" />
      </section>

      <section className="flex flex-col gap-3">
        <Chat />
      </section>
    </div>
  );
}

export default Home;
