import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.userService.logOut()
    this.router.navigate(["/login"])
  }

}
