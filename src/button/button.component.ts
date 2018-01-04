import {
  Component, Input, Output, EventEmitter
} from '@angular/core'

@Component({
  selector: 'z-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ZButton{
  
  @Input('type') themeType: string = ''
  @Input('native-type') nativeType: string = 'button'
  @Input() size: string = ''
  @Input() icon: string = ''
  @Input() disabled: boolean = false
  @Input('class') nativeClass: string = ''
  @Output() click: EventEmitter<any> = new EventEmitter<any>()
  
  constructor(
  ) {
  }
  
  clickHandle($event: Event): void {
    this.click.emit($event)
  }
  
  
}
