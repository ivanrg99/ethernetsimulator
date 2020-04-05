import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { SelectorService } from '../selector.service';
import { Item } from '../item';
import { BoardService } from '../board.service';
import { Drawable } from '../drawable';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;
  height = 600;
  width = 795;
  private context: CanvasRenderingContext2D;
  items: Item[] = [];

  constructor(private selectorService: SelectorService, private boardService: BoardService) {
  }

  ngAfterViewInit(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.context = canvasEl.getContext('2d', {
      alpha: false
    });

    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.context.lineWidth = 2;
    this.context.lineCap = 'round';
    this.context.strokeStyle = '#000';

    canvasEl.addEventListener('mousedown', this.captureEvents.bind(this));

    this.boardService.setDrawable(new Drawable(this.context, canvasEl));
    this.boardService.flush();

  }

  //TODO: Make board service that talks with renderer
  private captureEvents(ev: MouseEvent) {
    const x = ev.clientX;
    const y = ev.clientY;
    const type = this.selectorService.getSelectedItem();
    if (type == undefined) return;
    this.boardService.addItem(new Item(x, y, type, "#d3d3d3", type));
  }

}
