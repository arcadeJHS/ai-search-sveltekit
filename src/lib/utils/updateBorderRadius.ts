const borderRadiusLarge: string = '0.5rem';
const borderRadiusSmall: string = '9999px';

export const updateBorderRadius = (element: HTMLElement, height: number, threshold: number) => {
    element.style.borderRadius = height > threshold ? borderRadiusLarge : borderRadiusSmall;
};