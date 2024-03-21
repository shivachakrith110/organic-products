import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
     profileDetails: any[] = [
        { name: "John", age: 30  , location: "hyderabad"},
        { name: "Jane", age: 25 , location: "chennai" },
        { name: "Mahesh", age:23 ,location: "hyderabad"}
      ]
      ;
    
   // profileDetails={name: "mahesh"};
    
    constructor() {
    }
  
}
