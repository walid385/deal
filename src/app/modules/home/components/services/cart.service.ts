import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/modules/home/components/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Article[] = [];
  private cartItemCount = new BehaviorSubject(0);
  private cartItems = new BehaviorSubject<Article[]>([]);

  constructor() { }

  getCart(): BehaviorSubject<Article[]> {
    return this.cartItems;
  }

  getCartItemCount(): BehaviorSubject<number> {
    return this.cartItemCount;
  }

  addToCart(product: Article) {
    let newProduct = {...product}; // Cloning the product
    newProduct.amount = 1; // Setting the amount of the new product
    this.cart.push(newProduct); // Adding the new product
    this.cartItemCount.next(this.cartItemCount.value + 1); // Updating the item count
    this.cartItems.next(this.cart); // Updating the cart items
    console.log(this.cart);
  }


}
