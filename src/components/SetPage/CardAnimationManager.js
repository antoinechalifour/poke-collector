import { createContext, useContext, useRef } from "react";

const context = createContext();

export const CardAnimationManager = ({ children }) => {
  const ref = useRef(null);
  const animationContext = {
    isAnimated: (cardId) => cardId === ref.current,
    shouldAnimate: (cardId) => (ref.current = cardId),
    doneAnimating: () => (ref.current = null),
  };

  return (
    <context.Provider value={animationContext}>{children}</context.Provider>
  );
};

export const useCardAnimationManager = () => useContext(context);
