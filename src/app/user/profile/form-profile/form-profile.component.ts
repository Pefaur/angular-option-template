import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptFormComponent, OptUser, OptResponse, OptUserService } from '@option/core';
import { ISubscription } from 'rxjs/Subscription';

// @Component({
//   selector: 'opt-form-profile',
//   templateUrl: './form-profile.component.html',
//   styleUrls: ['./form-profile.component.scss']
// })
export class OptFormProfileComponent extends OptFormComponent implements OnInit, OnDestroy {

  requestSubscribes: ISubscription[];

  SERVER_MESSAGES: any = {
    401: 'Invalid user or password.'
  };

  formErrors: any = {
    firstName: '',
    lastName: '',
    email: ''
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
    password: {
      required: 'Password is required',
      minlength: 'Password must be at least 8 characters long'
    }
  };

  PLACEHOLDERS: any = {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email address',
    password: 'Password'
  };

  LABELS: any = {
    name: 'Name',
    email: 'Email',
    password: 'Password'
  };

  SUBMIT_LABEL = 'Update';

  constructor(protected formBuilder: FormBuilder, protected userService: OptUserService, protected router: Router) {
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
    const user = new OptUser();
    user.setFullName(this.form.value.firstName, this.form.value.lastName);
    user.username = this.form.value.email;
    user.password = this.form.value.password;
    user.email = this.form.value.email;
    this.requestSubscribes.push(this.userService.update(user)
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
