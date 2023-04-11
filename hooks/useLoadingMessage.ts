import { useEffect, useState } from "react";
import getLoadingMessages from "constants/getLoadingMessages";
import REVIEW_INPUT_INFO from "constants/reviewInputInfo";

function useLoadingMessage(isLoading: boolean) {
  const [loadingMessage, setLoadingMessage] = useState(
    getLoadingMessages("맛집")[0]
  );

  useEffect(() => {
    if (!isLoading) {
      setLoadingMessage(getLoadingMessages("맛집")[0]);
      return;
    }

    const restaurantName =
      (
        document.forms
          .namedItem("review")
          ?.elements.namedItem(REVIEW_INPUT_INFO[0].name) as HTMLInputElement
      ).value || "맛집";

    const loadingMessages = getLoadingMessages(restaurantName);
    let index = 0;

    const messageInterval = setInterval(() => {
      setLoadingMessage(loadingMessages[(index += 1)]);

      if (index === loadingMessages.length - 1) {
        clearInterval(messageInterval);
      }
    }, 1500);

    return () => {
      clearInterval(messageInterval);
      index = 0;
    };
  }, [isLoading]);

  return loadingMessage;
}

export default useLoadingMessage;
