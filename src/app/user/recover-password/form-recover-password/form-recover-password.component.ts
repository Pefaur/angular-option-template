import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OptFormComponent, OptAuthService, OptResponse, OptPasswordValidation } from '@option/core';

// @Component({
//   selector: 'opt-form-recover-password',
//   templateUrl: './form-recover-password.component.html',
//   styleUrls: ['./form-recover-password.component.scss']
// })
export class OptFormRecoverPasswordComponent extends OptFormComponent implements OnInit {
  @Output() onSubmitted = new EventEmitter();
  @Output() onSubmitError = new EventEmitter();

  token: string;

  formErrors = {
    'password': '',
    'repeatPassword': ''
  };

  VALIDATION_MESSAGES = {
    'password': {
      'required': 'Password is required',
      'minlength': 'Password must be at least 8 characters long'
    },
    'repeatPassword': {
      'required': 'Repeat password is required',
      'MatchPassword': 'Passwords must be equal'
    }
  };

  SERVER_MESSAGES = {
    204: 'The password successfully changed.',
    404: 'The password change request is invalid.',
    401: 'The password change request was previously used.' // the token is used before
  };

  PLACEHOLDERS = {
    'password': 'Nueva contraseña',
    'repeatPassword': 'Repetir contraseña'
  };

  SUMBIT_LABEL = 'Update password';

  constructor(protected formBuilder: FormBuilder,
              protected authService: OptAuthService,
              private router: Router,
              protected activatedRoute: ActivatedRoute) {
    super(formBuilder);
    this.formBuilderGroupControlsConfig = {
      'password': [
        null, [Validators.required, Validators.minLength(8)]
      ],
      'repeatPassword': [
        null, [Validators.required]
      ]
    };
    this.formBuilderGroupExtra = {
      validator: OptPasswordValidation.MatchPassword
    };
  }

  ngOnInit(): void {
    const self = this;
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      self.token = params['token'];
    });
    super.buildForm();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  submit() {
    const self = this;
    const password = this.form.value.password;
    const passwordConfirmation = this.form.value.password;
    this.authService.resetPassword(this.token, password, passwordConfirmation)
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
