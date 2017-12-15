import {
  Component, Input, Output, EventEmitter
} from '@angular/core'

@Component({
  selector: 'f-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class FNav{
  
  @Input('') type: string = 'primary'
  @Input('') model: string = ''
  @Input('class') nativeClass: string = ''
  @Output() click: EventEmitter<any> = new EventEmitter<any>()
  
  constructor(
  ) {
  }
  
  clickHandle($event: Event): void {
    this.click.emit($event)
  }
  
  
}
