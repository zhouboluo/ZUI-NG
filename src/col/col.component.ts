import {
  Component, Input, Output
} from '@angular/core'

@Component({
  selector: 'z-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.css']
})
export class ZCol{
  
  @Input('') xs: string = ''
  @Input('') sm: string = ''
  @Input('') md: string = ''
  @Input('') lg: string = ''
  @Input('') pull: string = ''
  @Input('') push: string = ''
  @Input('') offset: string = ''
  constructor(
  ) {
  }
  
  
}
