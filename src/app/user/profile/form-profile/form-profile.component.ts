import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptFormComponent, OptUser, OptResponse, OptUserService } from '@option/core';

// @Component({
//   selector: 'opt-form-profile',
//   templateUrl: './form-profile.component.html',
//   styleUrls: ['./form-profile.component.scss']
// })
export class OptFormProfileComponent extends OptFormComponent implements OnInit {
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

  submit() {
    const self = this;
    const user = new OptUser();
    user.setFullName(self.form.value.firstName, self.form.value.lastName);
    user.username = self.form.value.email;
    user.password = self.form.value.password;
    user.email = self.form.value.email;
    self.userService.update(user)
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
