import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FAlert } from '../alert/alert.component';
import { FButton } from '../button/button.component';
import { FTag } from '../tag/tag.component';
import { FSwitch } from '../switch/switch.component';
import { FRow } from '../row/row.component';
import { FCol } from '../col/col.component';
import { FPanel } from '../panel/panel.component';
import { FNav } from '../nav/nav.component';
import { FNavItem } from '../nav/nav-item.component';
@NgModule({
  declarations: [
    AppComponent,
    FAlert,
    FButton,
    FTag,
    FSwitch,
    FRow,
    FCol,
    FPanel,
    FNav,
    FNavItem,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
