import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptFormComponent, OptAuthService, OptResponse } from '@option/core';

// @Component({
//   selector: 'opt-form-login',
//   templateUrl: './form-login.component.html',
//   styleUrls: ['./form-login.component.scss']
// })
export class OptFormLoginComponent extends OptFormComponent implements OnInit {
  SERVER_MESSAGES: any = {
    401: 'Invalid user or password.'
  };

  formErrors: any = {
    email: '',
    password: ''
  };

  VALIDATION_MESSAGES: any = {
    email: {
      required: 'Email is required',
      email: 'Invalid email'
    },
    password: {
      required: 'Password is required',
      minlength: 'Password must be at least 8 characters long'
    }
  };

  PLACEHOLDERS: any = {
    email: 'Email',
    password: 'Password'
  };

  SUBMIT_LABEL = 'Log in';

  constructor(protected formBuilder: FormBuilder,
              protected authService: OptAuthService,
              protected router: Router) {
    super(formBuilder);
    this.formBuilderGroupControlsConfig = {
      email: [
        null, [Validators.required, Validators.email]
      ],
      password: [
        null, [Validators.required, Validators.minLength(8)]
      ]
    };
  }

  submit() {
    const self = this;
    this.authService.login(self.form.value.email, self.form.value.password)
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
