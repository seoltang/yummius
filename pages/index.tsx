import { Chat } from '../components/Chat';
import { Input } from '../components/Input';

function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <h1>맛집 리뷰 생성기</h1>
        <div className="text-zinc-600">
          a simple chat bot is implemented using Next.js, API Routes, and OpenAI API.
        </div>
      </section>

      <section>
        <Input />
      </section>

      <section className="flex flex-col gap-3">
        <h2>AI Chat Bot:</h2>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </div>
  );
}

export default Home;
