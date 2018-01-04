import {
  Component, Input, Output
} from '@angular/core'

@Component({
  selector: 'z-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class ZPanel{
  
  @Input('') type: string = ''
  @Input('') heading: string = ''
  @Input('') footer: string = ''
  constructor(
  ) {
  }
  
  
}
