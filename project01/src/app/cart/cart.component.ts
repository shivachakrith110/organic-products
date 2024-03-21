import { Component } from '@angular/core';
import { CartItemsService } from '../cart-items.service';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  //cartItems: any[] = [];

  constructor(public cartService: ServiceService,private router :Router) {}
    // Initialize cart items
    //
  deleteFromCart(item:any){
    this.cartService.delete(item);
  }
}