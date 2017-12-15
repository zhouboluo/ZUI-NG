import {
  Component, Input, Output
} from '@angular/core'

@Component({
  selector: 'f-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class FPanel{
  
  @Input('') type: string = ''
  @Input('') heading: string = ''
  @Input('') footer: string = ''
  constructor(
  ) {
  }
  
  
}
