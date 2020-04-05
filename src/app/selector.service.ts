import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectorService {

  private selectedItem;
  constructor() { }
  public setSelectedItem(item: string) {
    this.selectedItem = item;
  }
  public getSelectedItem() {
    return this.selectedItem;
  }

}
