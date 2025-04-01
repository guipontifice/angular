import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() onBtnClicked = new EventEmitter<any>();
  onClick() {
    
    this.onBtnClicked.emit('admin');
  }
}
