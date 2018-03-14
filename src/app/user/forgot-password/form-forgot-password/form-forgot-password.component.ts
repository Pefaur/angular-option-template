import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OptFormComponent, OptAuthService, OptResponse } from '@option/core';
import { ISubscription } from 'rxjs/Subscription';

// @Component({
//   selector: 'opt-form-forgot-password',
//   templateUrl: './form-forgot-password.component.html',
//   styleUrls: ['./form-forgot-password.component.scss']
// })
export class OptFormForgotPasswordComponent extends OptFormComponent implements OnInit, OnDestroy {
  @Output() onSubmitted = new EventEmitter();
  @Output() onSubmitError = new EventEmitter();

  requestSubscribes: ISubscription[];

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

  ngOnInit(): void {
    super.ngOnInit();
    this.requestSubscribes = [];
  }

  ngOnDestroy(): void {
    // unsubscribe requests
    this.requestSubscribes.map(requestSubscribe => {
      requestSubscribe.unsubscribe();
    });
  }

  submit() {
    this.requestSubscribes.push(this.authService.recoverPassword(this.form.value.email)
      .subscribe(
        (response: OptResponse) => {
          this.onSubmitted.emit();
          this.setServerMessage(response.statusCode, true);
        },
        (response: OptResponse) => {
          this.onSubmitError.emit();
          this.setServerMessage(response.statusCode);
        }
      )
    );
  }
}
