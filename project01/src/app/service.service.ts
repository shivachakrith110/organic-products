import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private items:any=[]
  isUserLoggedIn:boolean;
  loginStatus:Subject<any>;
  //httpClient: any;
  post:any;
  constructor(private Http:HttpClient,@Inject(PLATFORM_ID)private platformId:Object,private router:Router) {
    this.isUserLoggedIn = false;
    this.loginStatus=new Subject();

    if (isPlatformBrowser(this.platformId)) {
      this.items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    } else {
      this.items = []; // Initialize items to an empty array in non-browser environments
    }
   }
   
   getUserLoggedStatus():any{
    return this.loginStatus.asObservable();
  }
  SetUserLoggedIn(){
    this.isUserLoggedIn = true;
    this.loginStatus.next(true);
  }
  SetUserLoggedOut(){
    this.isUserLoggedIn = false;
    this.loginStatus.next (false);
  }

  // getAllCountries():Ob<any>{
  //   return this.Http.get('http://restcountries.com/v3.1/all');
  // }

  register(form:any){
    return this.Http.post('http://localhost:8000/register',form);
  }

  // login(form: any): any{
  //   let url=('http://localhost:8000/login/' + form.email + "/" + form.password)
  //   return this.Http.get(url);
  // }
    
  login(email: any, password: any): any {
    const url = "http://localhost:8000/login/" + email + "/" + password;
    console.log(url);
    return this.Http.get(url);
  }
  deleteEmployee(name: any): any {
    return this.Http.delete('https://localhost:8000/deleteUser/' + name)
  }
  getAllProducts():any{
    return this.Http.get("http://localhost:8000/AllProds");
  }


addToCart(product: any) {
  this.items.push({ ...product, quantity: 1 });
  if (isPlatformBrowser(this.platformId)) {
    // this.router.navigate(['login'])
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
}


getItems(){
  return this.items;
}
clearCartItems() {
  this.items = [];
}

// delete(item: any) {
//   this.items = this.items.filter((i) => i.id !== item.id);
//   }

delete(item: any) {
  this.items = this.items.filter((i: any) => i.id !== item.id); // Explicitly type 'i'
}



  incrementQuantity(id: number) {
    let item = this.items.find((i: any) => i.id === id); // Explicitly type 'i'
    if (item) {
      item.quantity++;
    }
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
  
  decrementQuantity(id: number) {
    let item = this.items.find((i: any) => i.id === id); // Explicitly type 'i'
    if (item) {
      item.quantity--;
    }
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
  

  getTotal() {
    return this.items.reduce((acc: number, item: any) => {
      return acc + item.price * item.quantity;
    }, 0);
  }


}
