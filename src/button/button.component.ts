import {
  Component, Input, Output, EventEmitter
} from '@angular/core'

@Component({
  selector: 'f-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class FButton{
  
  @Input('type') themeType: string = ''
  @Input('native-type') nativeType: string = 'button'
  @Input() size: string = ''
  @Input() icon: string = ''
  @Input('class') nativeClass: string = ''
  @Output() click: EventEmitter<any> = new EventEmitter<any>()
  
  constructor(
  ) {
  }
  
  clickHandle($event: Event): void {
    this.click.emit($event)
  }
  
  
}
