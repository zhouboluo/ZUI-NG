import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component';
import { ZAlert } from '../alert/alert.component';
import { ZButton } from '../button/button.component';
import { ZTag } from '../tag/tag.component';
import { ZSwitch } from '../switch/switch.component';
import { ZRow } from '../row/row.component';
import { ZCol } from '../col/col.component';
import { ZPanel } from '../panel/panel.component';
import { ZCheckbox } from '../checkbox/checkbox.component';
import { ZRadio } from '../radio/radio.component';
import { ZNav } from '../nav/nav.component';
import { ZNavItem } from '../nav/nav-item.component';
import { ZProgress } from '../progress/progress.component';
import { ZProgressBar } from '../progress/progress-bar.component';
import { ZBreadcrumb } from '../breadcrumb/breadcrumb.component';
import { ZBreadcrumbItem } from '../breadcrumb/breadcrumb-item.component';
import { ZImage } from '../image/image.component';
import { ZInput } from '../input/input.component';
import { ZSelect } from '../select/select.component';
import { ZSelectOption } from '../select/select-option.component';
@NgModule({
  declarations: [
    AppComponent,
    ZAlert,
    ZButton,
    ZTag,
    ZSwitch,
    ZRow,
    ZCol,
    ZPanel,
    ZNav,
    ZNavItem,
    ZCheckbox,
    ZRadio,
    ZProgress,
    ZProgressBar,
    ZBreadcrumb,
    ZBreadcrumbItem,
    ZImage,
    ZInput,
    ZSelect,
    ZSelectOption,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
