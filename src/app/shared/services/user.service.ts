import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { CommonDataService } from './common-data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      id: 8989,
      email: 'wasim@gmail.com',
      password: '1234',
    },
    {
      id: 1,
      email: 'junaid@gmail.com',
      password: '6789',
    },
    {
      id: 1,
      email: 'rizwan@gmail.com',
      password: '5455',
    },
  ];

  loginSubject= new BehaviorSubject(false)

  constructor(private commonDataService:CommonDataService) {}

  getUsers() {
    return this.users;
  }
  login(email:string,password:string){
    const user=this.users.find((user) => user.email == email && user.password == password);
    if(!user) return false

    localStorage.setItem("user",JSON.stringify(user))
    this.loginSubject.next(true)
    return true
  }

  logOut(){
    localStorage.removeItem("user")
    this.loginSubject.next(false)
  }

  getLoggedinUser(){
    const loggedinUser = localStorage.getItem("user")
    if(!loggedinUser) return false

    this.loginSubject.next(true)
    return JSON.parse(loggedinUser)
  }
}
