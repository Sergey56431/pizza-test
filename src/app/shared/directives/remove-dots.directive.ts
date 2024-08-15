import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appRemoveDots]',
  standalone: true
})
export class RemoveDotsDirective {

  constructor() {
  }

  @Input() dots!: string

  @HostListener('keydown', ['$event'])
  onKeyDown($event: KeyboardEvent) {
    if (this.dots.indexOf($event.key) !== -1) {
      $event.preventDefault();
    }
  }
}
