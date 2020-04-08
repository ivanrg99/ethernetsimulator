import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { SelectorService } from '../selector.service';
import { Item } from '../item';
import { BoardService } from '../board.service';
import { Drawable } from '../drawable';

import * as PIXI from 'pixi.js';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements AfterViewInit {
  @ViewChild('boardpx') boardpx: ElementRef;
  ngAfterViewInit(): void {
    const boardEl: HTMLElement = this.boardpx.nativeElement;
    const pixi = new PIXI.Application( { antialias: true});
    boardEl.appendChild(pixi.view);
    const gr = new PIXI.Graphics();
    gr.beginFill(0xDE3249);
    gr.drawRect(50, 50, 100, 100);
    gr.endFill();
    pixi.stage.addChild(gr);
  }

}
