const getLoadingMessages = (restaurantName: string) => [
  "ChatGPT가 배고픔을 느끼는 중...",
  `ChatGPT가 ${restaurantName}을(를) 찾아가는 중...`,
  `ChatGPT가 ${restaurantName} 안을 둘러보는 중...`,
  "ChatGPT가 메뉴판을 보고 메뉴를 고르는 중...",
  "ChatGPT가 메뉴를 주문하는 중...",
  "ChatGPT가 주문한 메뉴를 기다리는 중...",
  "ChatGPT가 테이블에 수저를 놓는 중...",
  "ChatGPT가 먹기 전 손을 닦는 중...",
  "ChatGPT가 음식을 먹어보는 중...",
  "ChatGPT가 맛을 음미하는 중...",
  "ChatGPT가 맛 평가를 고민하는 중...",
  `ChatGPT가 ${restaurantName} 리뷰를 글로 쓰는 중...`,
  "ChatGPT가 틀리게 쓴 맞춤법을 고치는 중...",
  "ChatGPT가 문장을 다듬는 중...",
];

export default getLoadingMessages;
