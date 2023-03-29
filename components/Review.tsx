interface ReviewProps {
  review: string;
}

function Review({ review }: ReviewProps) {
  return (
    <div className="w-full p-6 md:p-8 rounded-xl bg-gradient-to-br from-light-yellow to-coral shadow-lg whitespace-pre-wrap">
      {review.trim()}
      {/* TODO: 복사 버튼 */}
    </div>
  );
}

export default Review;
