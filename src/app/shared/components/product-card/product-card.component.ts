import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {


  @Input() public product: ProductType =  {} as ProductType;
  @Output()protected _addToOrderEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
  }

  addProductToOrder() {
    this._addToOrderEvent.emit(this.product)
  }

  openFullscreen(image: HTMLElement) {
    if (image.requestFullscreen) {
      image.requestFullscreen();
    }
  }
}
