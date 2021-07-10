import { useEffect } from "react";

export const useScrollToCard = (cards) => {
  useEffect(() => {
    const hash = window.location.hash || "";
    const id = hash.replace("#", "");

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) element.scrollIntoView();
    }, 0);
  }, [cards]);
};
