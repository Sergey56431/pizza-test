import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      {
        id: 1,
        image: "prod1.png",
        title: "Мясная Делюкс",
        description: "Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы"
      },
      {
        id: 2,
        image: "prod2.png",
        title: "Морская Премиум",
        description: "Перец, сыр, креветки, кальмары, мидии, лосось"
      },
      {
        id: 3,
        image: "prod3.png",
        title: "Бекон и Сосиски",
        description: "Бекон, сыр, сосиски, ананас, томатная паста"
      },
      {
        id: 4,
        image: "prod4.png",
        title: "Куриная Делюкс",
        description: "Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста"
      },
      {
        id: 5,
        image: "prod5.png",
        title: "Барбекю Премиум",
        description: "Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили"
      },
      {
        id: 6,
        image: "prod6.png",
        title: "Пепперони Дабл",
        description: "Пепперони, сыр, колбаса 2 видов: обжаренная и вареная"
      },
      {
        id: 7,
        image: "prod7.png",
        title: "Куриное трио",
        description: "Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы"
      },
      {
        id: 8,
        image: "prod8.png",
        title: "Сырная",
        description: "Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный"
      }
    ]
  }
}
