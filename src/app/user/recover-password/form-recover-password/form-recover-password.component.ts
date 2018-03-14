import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OptFormComponent, OptAuthService, OptResponse, OptPasswordValidation } from '@option/core';
import { ISubscription } from 'rxjs/Subscription';

// @Component({
//   selector: 'opt-form-recover-password',
//   templateUrl: './form-recover-password.component.html',
//   styleUrls: ['./form-recover-password.component.scss']
// })
export class OptFormRecoverPasswordComponent extends OptFormComponent implements OnInit, OnDestroy {

  @Output() onSubmitted = new EventEmitter();
  @Output() onSubmitError = new EventEmitter();

  requestSubscribes: ISubscription[];

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
              protected router: Router,
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
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.token = params['token'];
    });

    super.buildForm();

    this.requestSubscribes = [];
  }

  ngOnDestroy(): void {
    // unsubscribe requests
    this.requestSubscribes.map(requestSubscribe => {
      requestSubscribe.unsubscribe();
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  submit() {
    const password = this.form.value.password;
    const passwordConfirmation = this.form.value.password;
    this.requestSubscribes.push(this.authService.resetPassword(this.token, password, passwordConfirmation)
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
