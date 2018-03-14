import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptFormComponent, OptPasswordValidation, OptResponse, OptUserService } from '@option/core';

// @Component({
//   selector: 'opt-form-change-password',
//   templateUrl: './form-change-password.component.html',
//   styleUrls: ['./form-change-password.component.scss']
// })
export class OptFormChangePasswordComponent extends OptFormComponent implements OnInit {
  SERVER_MESSAGES: any = {
    400: 'The actual password is incorrect.',
    200: 'Your password was successfully changed.'
  };

  formErrors: any = {
    actualPassword: '',
    password: '',
    repeatPassword: ''
  };

  VALIDATION_MESSAGES: any = {
    actualPassword: {
      required: 'Actual password is required'
    },
    password: {
      required: 'Password is required',
      minlength: 'Password must be at least 8 characters long'
    },
    repeatPassword: {
      required: 'Repeat password is required',
      MatchPassword: 'Passwords must be equal'
    }
  };

  PLACEHOLDERS: any = {
    actualPassword: 'Actual password',
    password: 'Password',
    repeatPassword: 'Re-enter password'
  };

  LABELS: any = {
    actualPassword: 'Actual password',
    password: 'Password',
    repeatPassword: 'Re-enter Password'
  };

  SUBMIT_LABEL = 'Update';

  constructor(protected formBuilder: FormBuilder, protected userService: OptUserService, protected router: Router) {
    super(formBuilder);
    this.formBuilderGroupControlsConfig = {
      actualPassword: [
        null, [Validators.required]
      ],
      password: [
        null, [Validators.required, Validators.minLength(8)]
      ],
      repeatPassword: [
        null, [Validators.required]
      ]
    };

    this.formBuilderGroupExtra = {
      validator: OptPasswordValidation.MatchPassword
    };
  }

  submit() {
    const self = this;
    const actualPassword = self.form.value.actualPassword;
    const password = self.form.value.password;
    const repeatPassword = self.form.value.repeatPassword;
    self.userService.changePassword(actualPassword, password, repeatPassword)
      .then(function(response: OptResponse) {
        self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
        self.serverMessage.show = true;
        self.serverMessage.isStatusOk = true;
      })
      .catch(function(response: OptResponse) {
        self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
        self.serverMessage.show = true;
        self.serverMessage.isStatusOk = false;
      });
  }
}
