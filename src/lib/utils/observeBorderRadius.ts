export const observeBorderRadius = ({
    elements,
    thresholds,
    borderRadiusLarge = '0.5rem',
    borderRadiusSmall = '9999px'
  }: {
    elements: HTMLElement[];
    thresholds: number[];
    borderRadiusLarge?: string;
    borderRadiusSmall?: string;
  }) => {
    if (!elements || elements.length === 0 || !thresholds || thresholds.length !== elements.length) return;
  
    const handleResize = (entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
          const { height } = entry.contentRect;
          const element = entry.target as HTMLElement;
          const index = elements.indexOf(element);
          const threshold = thresholds[index];
          element.style.borderRadius = height > threshold ? borderRadiusLarge : borderRadiusSmall;
        }
      };
  
    const observer = new ResizeObserver(handleResize);
  
    elements.forEach(element => {
      observer.observe(element);
    });
  
    return () => {
      observer.disconnect();
    };
};