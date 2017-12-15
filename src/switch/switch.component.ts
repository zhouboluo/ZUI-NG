import {
  Component, Input, Output
} from '@angular/core'

@Component({
  selector: 'f-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class FSwitch{
  
  @Input('text-position') textPosition: string = ''
  @Input() inline: boolean = false
  @Input() disabled: boolean = false
  
  constructor(
  ) {
  }
  
  
}
