import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  loginStatus:any;
  isLoggedIn: boolean = false;
  
  constructor(private service: ServiceService){}
   
  
  ngOnInit(): void{
      this.service.getUserLoggedStatus().subscribe((loginStatusData: any)=>{
        this.loginStatus=loginStatusData;
      });
    }
    login() {
      // Logic for user login
      this.isLoggedIn = true;
    }
  
    logout() {
      // Logic for user logout
      this.isLoggedIn = false;
    }
  }


