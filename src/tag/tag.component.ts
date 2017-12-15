import {
  Component, Input, Output, EventEmitter
} from '@angular/core'

@Component({
  selector: 'f-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class FTag{
  
  @Input() type: string = ''
  @Input() badge: boolean = false
  @Input() dot: boolean = false
  
  constructor(
  ) {
  }
  
  
}
