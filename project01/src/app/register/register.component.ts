// import { Component } from '@angular/core';



// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

//   formData = {
//     name: 'shiva',
//     email: 'shivachakrith110@gmail.com',
//     phone: '9032755238',
//     password: '1234567890',
//     confirmPassword: '1234567890'
//   };

//   submitForm() {
//     console.log('Form submitted:', this.formData);
//     // Add further logic for form submission, e.g., sending data to a server
//   }

 

 

// }



import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router:Router,private service:ServiceService){}
  registerUser(form:any) {
    // console.log('Form submitted:', this.formData);
    // Add further logic for form submission, e.g., sending data to a server
    console.log(form)
      if(form.name === ''|| form.email === '' || form.password === '' ||  form.phno === ''){
        console.error("registration failed",Error);
        alert("registration unsucessful")
      }
      else if(form != ''){
        this.service.register(form).subscribe((Response:any)=>{
        console.log("registration sucessful",Response);
        this.service.SetUserLoggedIn();
        this.router.navigate(['login'])
        alert("registration sucessful")
      },
        (error: any) =>{console.error("registration failed",error);
    alert("registration unsucessful")
  });
}
}
  EmailValidator(control:AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if(!pattern.test(value) && control.touched) 
      return {
        emailError:true
      }
    else return null;
}

};
