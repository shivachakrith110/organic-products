import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  cartItems: any[] = [];

  constructor() { }

  // Method to add items to the cart
  addToCart(item: any): void {
    this.cartItems.push(item);
  }

  // Method to get cart items
  getCartItems(): any[] {
    return this.cartItems;
  }
}