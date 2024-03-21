import { Component, inject } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
   profileService = inject(ProfileService);
   profile: any[] = [];

constructor(){
  //will call the method callApi in profileservice
  this.profile= this.profileService.profileDetails;
 
}

}
