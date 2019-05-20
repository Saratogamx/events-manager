import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  mouseoverLogin: boolean;
  loginInvalid = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.username, formValues.password)
      .subscribe(resp => {
        if (!resp) {
          this.loginInvalid = true;
          this.toastr.error('Invalid Login Info', 'Auth Error');
        } else {
          this.router.navigate(['events']);
        }
      });
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
