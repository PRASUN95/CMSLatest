import { Component } from '@angular/core';
import {UserServices} from '../services/user.services';

@Component({
    selector : 'user',
    templateUrl: `user.component.html`,
    providers : [UserServices]
})
export class UserComponent  { 
    name : string;
    email : string;
    address : address;
    hobbies : string[];
    showHobbies : boolean;
    users : User[];
    constructor(private userServices : UserServices)
    {
        this.name = 'Angular';
        this.email = "Angular2@gmail.com";
        this.address = 
        {
        street : '18 main road',
        city : 'Wakanda',
        state : 'Slokovia',
        zip : '78787878'
        };
        this.hobbies = ['cricket','football'];
        this.showHobbies = false;
        this.userServices.getPosts().subscribe(posts => {
            this.users = posts;
        });
    }
    toggleHobbies()
    {
        if(this.showHobbies == true)
        {
            this.showHobbies = false;
        }
        else{
            this.showHobbies = true;
        }
    }
    addHobby(Hobby : string)
    {
        this.hobbies.push(Hobby);
    }
    deleteHobby(i : number)
    {
        debugger;
        this.hobbies.splice(i,1);
    }
}
interface address {
    street : string;
    city : string;
    state : string;
    zip : string
};
interface User{
    id: string;
    title:string;
    body:string;
}
