import {Component, OnInit, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProductCardComponent} from "./shared/components/product-card/product-card.component";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductType} from "../types/product.type";
import {ProductService} from "./shared/services/product.service";
import {NgStyle} from "@angular/common";
import {RemoveDotsDirective} from "./shared/directives/remove-dots.directive";
import {PopupComponent} from "./shared/components/popup/popup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ProductCardComponent, ReactiveFormsModule, NgStyle, RemoveDotsDirective, PopupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', 'app.component-adaptive.scss']
})
export class AppComponent implements OnInit {
  public title = 'pizza-test';

  protected _products: ProductType[] = [];

  protected _menu = signal(false);
  public show = signal(false);
  constructor(private _fb: FormBuilder,
              private _productService: ProductService) {
  }

  ngOnInit() {
    this._products = this._productService.getProducts();
  }

  protected _showMenu() {
    this._menu.set(!this._menu())
  }

  protected _scrollTo(target: HTMLElement): void {
    target.scrollIntoView({block: "center", behavior: "smooth"});
  }

  protected _addToOrder(target: HTMLElement) {
    target.scrollIntoView({block: "center", behavior: "smooth"});
  }

  get name() {
    return this._orderForm.get('name');
  }

  get address () {
    return this._orderForm.get('address');
  }

  get phone() {
    return this._orderForm.get('phone');
  }

  protected _orderForm = this._fb.group({
    name: ['', [Validators.required]],
    address: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('(?<=^|\\s|>|\\;|\\:|\\))(?:\\+|7|8|9|\\()[\\d\\-\\(\\) ]{8,}\\d')]],
  });

  protected _sendOrder() {
    if (this._orderForm.valid && this._orderForm.value.name &&
      this._orderForm.value.phone && this._orderForm.value.address) {
      // здесь должнабыть отправка на сервер
      this.show.set(true);
    } else {
      alert('Произошла какая-то ошибка');
    }
  }
}
