import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from './shared/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  isLoggedIn=false
  loginSubscription:Subscription

  constructor(private userService:UserService) {}

  ngOnInit() {
      const loginSubscription=this.userService.loginSubject.subscribe(isLoggedin=>{
        this.isLoggedIn=isLoggedin
      })
  }

  ngOnDestroy(){
    this.loginSubscription.unsubscribe()
  }

 
}
