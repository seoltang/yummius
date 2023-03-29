import type { ReviewInputInfo } from "types/review";

const REVIEW_INPUT_INFO: ReviewInputInfo[] = [
  {
    id: 0,
    type: "name",
    name: "가게 이름",
    example: "가게 이름을 입력하세요.",
    isRequired: true,
    isLongAnswer: false,
  },
  {
    id: 1,
    type: "location",
    name: "가게 위치",
    example: "예) 강남역",
    isRequired: true,
    isLongAnswer: false,
  },
  {
    id: 2,
    type: "food",
    name: "먹은 음식",
    description: "먹은 메뉴의 이름, 맛, 양 등",
    example:
      "예) 게살 버거의 게살이 부드럽고 맛있었어요. 감자튀김이 바삭하고 양이 많았어요.",
    isRequired: true,
    isLongAnswer: true,
  },
  {
    id: 3,
    type: "price",
    name: "가격",
    example: "예) 가성비가 좋아요. 비싼 값 해요.",
    isRequired: false,
    isLongAnswer: true,
  },
  {
    id: 4,
    type: "service",
    name: "서비스",
    example: "예) 친절해요. 반찬 리필을 빠르게 해주셨어요.",
    isRequired: false,
    isLongAnswer: true,
  },
  {
    id: 5,
    type: "mood",
    name: "분위기",
    example: "예) 인테리어가 예뻐요. 바다 뷰가 좋아요.",
    isRequired: false,
    isLongAnswer: true,
  },
  {
    id: 6,
    type: "cleanliness",
    name: "청결",
    example: "예) 깨끗하게 관리되고 있어요.",
    isRequired: false,
    isLongAnswer: true,
  },
  {
    id: 7,
    type: "reservation",
    name: "예약 / 웨이팅",
    example: "예) 전화로 예약할 수 있어요. 주말에는 웨이팅이 길어요.",
    isRequired: false,
    isLongAnswer: true,
  },
  {
    id: 8,
    type: "partner",
    name: "같이 가기 좋은 사람",
    example: "예) 소개팅 장소로 추천해요. 혼밥하는 사람도 꽤 있어요.",
    isRequired: false,
    isLongAnswer: true,
  },
];

export default REVIEW_INPUT_INFO;
