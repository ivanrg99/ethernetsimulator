import {
  Injectable
} from '@angular/core';
import {
  Item
} from './item';
import {
  Drawable
} from './drawable';
import {
  CONTEXT_NAME
} from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class RendererService {
  WIDTH = 64;
  HEIGHT = 64;

  constructor() {}

  draw(drb: Drawable, items: Item[]) {
    items.forEach(item => {
      const shape = this.getShape(item.type);
      switch (shape) {
        case "diamond":
          this.drawDiamond(drb, item);
          break;
        case "rectangle":
          this.drawRectangle(drb, item);
          break;
        case "circle":
          this.drawCircle(drb, item);
          break;
      }

    })
  }
  clear(drb: Drawable) {
    drb.cx.fillStyle = 'white';
    drb.cx.fillRect(0, 0, drb.canvas.width, drb.canvas.height);

  }
  private getShape(type: string) {
    let shape = "ERROR";
    switch (type) {
      case "Node":
        shape = "circle";
        break;
      case "Network":
        shape = "diamond";
        break;
      case "Bridge":
        shape = "rectangle";
        break;
      case "Cable":
        shape = "line";
        break;
    }
    return shape;
  }
  private drawRectangle(drb, item) {
    drb.cx.fillStyle = item.color;
    const widthOffset = (this.WIDTH + (this.WIDTH / 2));
    const heightOffset = this.HEIGHT*2 - (this.HEIGHT/2);
    console.log(widthOffset + " --- " + heightOffset);

    const x = item.x - (this.WIDTH + (this.WIDTH / 2));
    const y = item.y - this.HEIGHT*2 - (this.HEIGHT/2);
    drb.cx.fillRect(x, y, this.WIDTH, this.HEIGHT);

  }
  private drawCircle(drb, item) {
    const widthOffset = this.WIDTH;
    const heightOffset = this.HEIGHT*2;
    console.log(widthOffset + " --- " + heightOffset);

    const centerX = item.x - this.WIDTH;
    const centerY = item.y - this.HEIGHT*2;
    const radius = 32;

    drb.cx.beginPath();
    drb.cx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    drb.cx.fillStyle = item.color;
    drb.cx.fill();
  }
  private drawDiamond(drb, item) {
    const widthOffset = this.WIDTH;
    const heightOffset = (this.HEIGHT*2+this.HEIGHT/2);
    console.log(widthOffset + " --- " + heightOffset);

    drb.cx.fillStyle = item.color;
    const x = item.x - this.WIDTH;
    const y = item.y - (this.HEIGHT*2+this.HEIGHT/2);

    drb.cx.beginPath();
    drb.cx.moveTo(x, y);

    // top left edge
    drb.cx.lineTo(x - this.WIDTH / 2, y + this.HEIGHT / 2);

    // bottom left edge
    drb.cx.lineTo(x, y + this.HEIGHT);

    // bottom right edge
    drb.cx.lineTo(x + this.WIDTH / 2, y + this.HEIGHT / 2);

    // closing the path automatically creates
    // the top right edge
    drb.cx.closePath();

    drb.cx.fill();
    drb.cx.restore();
  }
}
