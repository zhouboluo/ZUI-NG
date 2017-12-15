import {
  Component, Input, OnInit, ElementRef, Optional
} from '@angular/core'
import { FNav } from './nav.component'

@Component({
  selector: 'f-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class FNavItem implements OnInit{
  @Input() index: string
  @Input() href: string
  constructor(
    @Optional() public rootMenu: FNav,
    private el: ElementRef,
  ) {
  }
  
  removeNgTag(nativeElement: HTMLElement): void {
    const parentElement = nativeElement.parentElement
    if (!parentElement || !parentElement.insertBefore) return
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement)
    }
    parentElement.removeChild(nativeElement)
  }

  ngOnInit(): void {
    this.removeNgTag(this.el.nativeElement)
  }

  
  
}
