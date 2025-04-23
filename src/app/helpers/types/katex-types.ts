declare global {
    interface globalThis {
        renderMathInElement(elem: HTMLElement, options: any): void;
    }
    interface Window {
        renderMathInElement(elem: HTMLElement, options: any): void;
    }
}