import { EventEmitter } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    users: User[]=[
        new User('Krishna','Male','Monthly','Active'),
        new User('Eswar','Male','Yearly','Inactive'),
        new User('Radha','Female','Quaterly','Active')
    ];
    constructor(private logger:LoggerService){

    }
    GetAllUsers(){
        return this.users; 
    }
    CreateUser(name:string,gender:string,subType:string,status:string){
        let user=new User(name,gender,subType,status);
        this.users.push(user);
        
        this.logger.LogMessage(name,status);
    }
    OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();
   
    OnShowUserDetails(user: User){
        this.OnUserDetailsClicked.emit(user);
        
    }
}