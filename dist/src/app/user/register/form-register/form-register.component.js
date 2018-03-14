var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Validators } from '@angular/forms';
import { OptFormComponent, OptUser } from '@option/core';
// @Component({
//   selector: 'opt-form-register',
//   templateUrl: './form-register.component.html',
//   styleUrls: ['./form-register.component.scss']
// })
var OptFormRegisterComponent = /** @class */ (function (_super) {
    __extends(OptFormRegisterComponent, _super);
    function OptFormRegisterComponent(formBuilder, authService, router) {
        var _this = _super.call(this, formBuilder) || this;
        _this.formBuilder = formBuilder;
        _this.authService = authService;
        _this.router = router;
        _this.SERVER_MESSAGES = {
            401: 'Invalid user or password.'
        };
        _this.formErrors = {
            firstName: '',
            lastName: '',
            email: '',
            repeatEmail: '',
            password: ''
        };
        _this.VALIDATION_MESSAGES = {
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
            repeatEmail: {
                required: 'Confirm email is required',
                email: 'Invalid confirm email'
            },
            password: {
                required: 'Password is required',
                minlength: 'Password must be at least 8 characters long'
            }
        };
        _this.PLACEHOLDERS = {
            firstName: 'First name',
            lastName: 'Last name',
            email: 'Email address',
            repeatEmail: 'Re-enter email address',
            password: 'Password'
        };
        _this.LABELS = {
            name: 'Name',
            email: 'Email',
            repeatEmail: 'Re-enter Email',
            password: 'Password'
        };
        _this.SUBMIT_LABEL = 'Sign up';
        _this.formBuilderGroupControlsConfig = {
            firstName: [
                null, [Validators.required]
            ],
            lastName: [
                null, [Validators.required]
            ],
            email: [
                null, [Validators.required, Validators.email]
            ],
            repeatEmail: [
                null, [Validators.required, Validators.email]
            ],
            password: [
                null, [Validators.required, Validators.minLength(8)]
            ]
        };
        return _this;
    }
    OptFormRegisterComponent.prototype.submit = function () {
        var self = this;
        var user = new OptUser();
        user.setFullName(self.form.value.firstName, self.form.value.lastName);
        user.username = self.form.value.email;
        user.password = self.form.value.password;
        user.email = self.form.value.email;
        self.authService.register(user)
            .then(function () {
            self.router.navigate(['/']);
        })
            .catch(function (response) {
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = false;
        });
    };
    return OptFormRegisterComponent;
}(OptFormComponent));
export { OptFormRegisterComponent };
//# sourceMappingURL=form-register.component.js.map