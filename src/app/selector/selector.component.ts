import { Component, OnInit } from '@angular/core';
import { Topologia } from '../topology-builder.service';
import { SelectorService } from '../selector.service'
import { BoardService } from '../board.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  public items: string[] = Topologia;
  constructor(public selectorService: SelectorService,
    public boardService: BoardService) { }

  ngOnInit(): void {
  }

  onSelect(item) {
    this.selectorService.setSelectedItem(item);
  }


}
