import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptFormComponent, OptPasswordValidation, OptResponse, OptUserService } from '@option/core';
import { ISubscription } from 'rxjs/Subscription';

// @Component({
//   selector: 'opt-form-change-password',
//   templateUrl: './form-change-password.component.html',
//   styleUrls: ['./form-change-password.component.scss']
// })
export class OptFormChangePasswordComponent extends OptFormComponent implements OnInit, OnDestroy {

  requestSubscribes: ISubscription[];

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
    const actualPassword = this.form.value.actualPassword;
    const password = this.form.value.password;
    const repeatPassword = this.form.value.repeatPassword;
    this.requestSubscribes.push(this.userService.changePassword(actualPassword, password, repeatPassword)
      .subscribe(
        (response: OptResponse) => {
          this.setServerMessage(response.statusCode, true);
        },
        (response: OptResponse) => {
          this.setServerMessage(response.statusCode);
        }
      )
    );
  }

}
