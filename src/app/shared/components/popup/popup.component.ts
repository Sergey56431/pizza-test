import {Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  @Input() public show = signal(true)

  protected _showPopup() {
    this.show.set(false)
  }
}
