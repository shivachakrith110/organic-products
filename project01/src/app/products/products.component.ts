import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any;
  constructor(private service:ServiceService){

  }
  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data:any)=>{
      this.products=data;
      // console.log(data); 
      console.log(this.products); //
     
    });
  }

//   addToCart(product: any) {
//     this.service.addToCart(product);
//   }



addToCart(product: any) {
  this.service.addToCart(product);
}
}
