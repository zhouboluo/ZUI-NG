import {
  Component, Input, OnInit, ElementRef, Optional
} from '@angular/core'
import { ZNav } from './nav.component'

@Component({
  selector: 'z-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class ZNavItem implements OnInit{
  @Input() index: string
  @Input() href: string
  constructor(
    @Optional() public rootMenu: ZNav,
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
