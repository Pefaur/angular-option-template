import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptFormComponent, OptUser, OptAuthService, OptResponse } from '@option/core';

// @Component({
//   selector: 'opt-form-register',
//   templateUrl: './form-register.component.html',
//   styleUrls: ['./form-register.component.scss']
// })
export class OptFormRegisterComponent extends OptFormComponent implements OnInit {
  SERVER_MESSAGES: any = {
    401: 'Invalid user or password.'
  };

  formErrors: any = {
    firstName: '',
    lastName: '',
    email: '',
    repeatEmail: '',
    password: ''
  };

  VALIDATION_MESSAGES: any = {
    firstName: {
      required: 'First name is required'
    },
    lastName: {
      required: 'Last name is required'
    },
    email: {
      required: 'Email is required',
      email: 'Invalid email'
    },
    repeatEmail: {
      required: 'Confirm email is required',
      email: 'Invalid confirm email'
    },
    password: {
      required: 'Password is required',
      minlength: 'Password must be at least 8 characters long'
    }
  };

  PLACEHOLDERS: any = {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email address',
    repeatEmail: 'Re-enter email address',
    password: 'Password'
  };

  LABELS: any = {
    name: 'Name',
    email: 'Email',
    repeatEmail: 'Re-enter Email',
    password: 'Password'
  };

  SUBMIT_LABEL = 'Sign up';

  constructor(protected formBuilder: FormBuilder, protected authService: OptAuthService, protected router: Router) {
    super(formBuilder);
    this.formBuilderGroupControlsConfig = {
      firstName: [
        null, [Validators.required]
      ],
      lastName: [
        null, [Validators.required]
      ],
      email: [
        null, [Validators.required, Validators.email]
      ],
      repeatEmail: [
        null, [Validators.required, Validators.email]
      ],
      password: [
        null, [Validators.required, Validators.minLength(8)]
      ]
    };
  }

  submit() {
    const self = this;
    const user = new OptUser();
    user.setFullName(self.form.value.firstName, self.form.value.lastName);
    user.username = self.form.value.email;
    user.password = self.form.value.password;
    user.email = self.form.value.email;
    self.authService.register(user)
      .then(function() {
        self.router.navigate(['/']);
      })
      .catch(function(response: OptResponse) {
        self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
        self.serverMessage.show = true;
        self.serverMessage.isStatusOk = false;
      });
  }
}
