import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../../Models/User';
import { USER_TOKEN } from '../../../app.module';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
 
})
export class UserDetailsComponent implements OnInit{
  selectedUser: User | undefined; 
   userService = inject(USER_TOKEN)
   ngOnInit(){
     this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data;
      console.log(this.selectedUser);
    })
   }
}
