import { Injectable } from '@angular/core';
import { Item } from './item';
import { RendererService } from './renderer.service';
import { Drawable } from './drawable';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  items: Item[] = [];
  drb: Drawable;

  constructor(private renderer: RendererService) { }

  setDrawable(drb: Drawable) {
    this.drb = drb;
  }

  addItem(item: Item) {
    this.items.push(item);
    this.draw();
  }
  draw() {
    this.renderer.draw(this.drb, this.items);
  }
  flush() {
    this.items = [];
    this.renderer.clear(this.drb);
  }
}