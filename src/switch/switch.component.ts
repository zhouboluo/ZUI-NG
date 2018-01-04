import {
  Component, Input, Output
} from '@angular/core'

@Component({
  selector: 'z-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class ZSwitch{
  
  @Input('text-position') textPosition: string = ''
  @Input() inline: boolean = false
  @Input() disabled: boolean = false
  
  constructor(
  ) {
  }
  
  
}
