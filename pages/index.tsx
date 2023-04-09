import { useState } from "react";
import { Button } from "components/Button";
import Form from "components/Form";
import Review from "components/Review";

function Home() {
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);

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
          <small className="text-right text-gray-600 tracking-[.125rem] leading-3">
            ChatGPT
          </small>
          <h1 className="font-title text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-dark-yellow to-tomato">
            쩝쩝박사
          </h1>
        </header>

        <div className="pt-4 pb-2 break-keep">
          맛집 리뷰에 필요한 정보를 입력하고 ChatGPT로 리뷰를 생성해 보세요.
        </div>

        <Form
          setReview={setReview}
          setIsReadOnly={setIsReadOnly}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </section>

      {review && (
        <section className="flex flex-col items-center justify-between md:basis-1/2">
          <Review
            review={review}
            setReview={setReview}
            isReadOnly={isReadOnly}
            setIsReadOnly={setIsReadOnly}
          />

          <Button
            type="reset"
            form="review"
            onClick={onReset}
            isOutlined={true}
            className="mt-12"
          >
            다시하기
          </Button>
        </section>
      )}
    </div>
  );
}

export default Home;
