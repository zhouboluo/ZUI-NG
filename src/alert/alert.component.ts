import { Component, Input, Output, EventEmitter } from '@angular/core';

export const ICON_CLASS_MAP: { [key: string]: string } = {
  'success': 'icon-ok-sign',
  'warning': 'icon-frown',
  'error': 'icon-remove-sign',
  'info': 'icon-info-sign',
}

@Component({
  selector: 'z-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class ZAlert {
  @Input() type: string = 'info';
  @Input() title: string = '';
  @Input() center: boolean = false;
  @Input() closable: boolean = true;
  @Input('close-text') closeText: string = '';
  @Input('show-icon') showIcon: boolean = false;
  @Output() close: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(){
  }

  makeIconClass(): string {
  	const base: string = ICON_CLASS_MAP[this.type] || 'icon-info';
    return base;
  }

  makeTitleClass(): string {
  	return '';
  }

  clickHandle(event: Event){
  	this.close.emit(event);
  }
}
