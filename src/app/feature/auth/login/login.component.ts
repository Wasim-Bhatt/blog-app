import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { CommonDataService } from '../../../shared/services/common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isInvalidCredentials=false
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.isInvalidCredentials=false
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
    } else {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      const isLoggedIn=this.userService.login(email,password)
      if(!isLoggedIn) this.isInvalidCredentials=true
      else this.router.navigateByUrl("blogs")

    }
  }
}
