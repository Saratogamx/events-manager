import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*')
    ]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  /**
   * Returns true if either form field is "valid" or "untouched"
  */
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {

      // Calls updateCurrentUser and subscribes to the returned Observable
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success('Profile Saved', null, {
            onHidden: () => this.router.navigate(['events'])
          });
        });

    } else {
      this.toastr.error('Form is invalid.', 'Errors:');
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.toastr.info('You have been logged out.', null);
      this.router.navigate(['/user/login']);
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
