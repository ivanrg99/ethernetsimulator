import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { BoardComponent } from './board/board.component';
import { SelectorService } from './selector.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    BoardComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SelectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
