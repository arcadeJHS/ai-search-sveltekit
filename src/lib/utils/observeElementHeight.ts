export const observeElementHeight = (
  element: HTMLElement,
  callbackFn: (element: HTMLElement, height: number) => void
) => {
  if (!element) return;

  const handleResize = (entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      const { height } = entry.contentRect;
      const targetElement = entry.target as HTMLElement;
      if (targetElement === element) {
        callbackFn(targetElement, height);
      }
    }
  };

  const observer = new ResizeObserver(handleResize);
  observer.observe(element);

  return () => {
    observer.disconnect();
  };
};