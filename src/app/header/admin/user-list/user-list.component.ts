import { Component, Inject } from '@angular/core';
import { UserService } from '../../../Services/User.service';
import { User } from '../../../Models/User';
import { USER_TOKEN } from '../../../app.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent {
  constructor(@Inject(USER_TOKEN) private userService : UserService){
  }
  userList=this.userService.GetAllUsers();
  
  ShowUserDetails(user: User){
    this.userService.OnShowUserDetails(user);
  }
}
