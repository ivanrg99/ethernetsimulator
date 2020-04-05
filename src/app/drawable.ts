export class Drawable {
    cx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    constructor(cx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.cx = cx;
        this.canvas = canvas;
    }
}