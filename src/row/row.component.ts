import {
  Component, Input, Output, EventEmitter
} from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'z-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class ZRow{
  
  @Input('class') nativeClass: string = ''
  @Input() style: string = ''
  constructor(
  	private sanitizer: DomSanitizer,
  ) {
  }
  
  customStyles(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(this.style)
  }
  
}
