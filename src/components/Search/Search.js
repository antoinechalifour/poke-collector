import { useResetDetachedModeOnRouteChange } from "./useResetDetachedModeOnRouteChange";
import { useAutoComplete } from "./useAutoComplete";

export const Search = () => {
  useResetDetachedModeOnRouteChange();
  const { containerRef } = useAutoComplete();

  return <div ref={containerRef} />;
};
