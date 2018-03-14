import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OptFormComponent, OptAuthService, OptResponse } from '@option/core';

// @Component({
//   selector: 'opt-form-forgot-password',
//   templateUrl: './form-forgot-password.component.html',
//   styleUrls: ['./form-forgot-password.component.scss']
// })
export class OptFormForgotPasswordComponent extends OptFormComponent implements OnInit {
  @Output() onSubmitted = new EventEmitter();
  @Output() onSubmitError = new EventEmitter();

  formErrors = {
    'email': ''
  };

  VALIDATION_MESSAGES = {
    'email': {
      'required': 'Email is required',
      'email': 'Invalid email'
    }
  };

  SERVER_MESSAGES = {
    204: 'The instructions to recover your password were delivered to your email.',
    400: 'Recovery email already sent before.',
    404: 'User not found.'
  };

  PLACEHOLDERS = {
    'email': 'Email'
  };

  SUMBIT_LABEL = 'Recover password';

  constructor(protected formBuilder: FormBuilder, protected authService: OptAuthService) {
    super(formBuilder);
    this.formBuilderGroupControlsConfig = {
      'email': [
        null, [Validators.required, Validators.email]
      ]
    };
  }

  submit() {
    const self = this;
    self.authService.recoverPassword(self.form.value.email)
      .then(function(response: OptResponse) {
        self.onSubmitted.emit();
        self.serverMessage.message = (<any>self).SERVER_MESSAGES[response.statusCode];
        self.serverMessage.show = true;
        self.serverMessage.isStatusOk = true;
      })
      .catch(function(response: OptResponse) {
        self.onSubmitError.emit();
        self.serverMessage.message = (<any>self).SERVER_MESSAGES[response.statusCode];
        self.serverMessage.show = true;
        self.serverMessage.isStatusOk = false;
      });
  }
}
