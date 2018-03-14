import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptFormComponent, OptAuthService, OptResponse } from '@option/core';
import { ISubscription } from 'rxjs/Subscription';

// @Component({
//   selector: 'opt-form-login',
//   templateUrl: './form-login.component.html',
//   styleUrls: ['./form-login.component.scss']
// })
export class OptFormLoginComponent extends OptFormComponent implements OnInit, OnDestroy {

  requestSubscribes: ISubscription[];

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
    this.requestSubscribes.push(this.authService.login(this.form.value.email, this.form.value.password)
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (response: OptResponse) => {
          this.setServerMessage(response.statusCode);
        }
      )
    );
  }

}
