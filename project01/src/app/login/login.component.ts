import { Component } from '@angular/core';
import { FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 customer:any
  employee:any
email:any;
pass:any;
  

  constructor(private router: Router,private service:ServiceService){
    this.email="adminoffical@gmail.com";
    this.pass="Admin@123";
  
    }
  loginvalidate(loginForm: any): void {
   
    const email = loginForm.value.email;
    console.log(email);
    const password = loginForm.value.password;
 
    this.service.login(email, password).subscribe((data: any) => {
      this.customer = data;
      console.log(data); 
      if (this.customer !== null) {
        this.router.navigate(['home']);
      } else if(email === this.email && password === this.pass) {
        this.router.navigate(['showcustomers']);
      }
      
      else {
        alert('Invalid credentials');
      } 
    });
  }
   
    
    }
