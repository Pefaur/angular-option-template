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
import { OptFormComponent, OptPasswordValidation } from '@option/core';
// @Component({
//   selector: 'opt-form-change-password',
//   templateUrl: './form-change-password.component.html',
//   styleUrls: ['./form-change-password.component.scss']
// })
var OptFormChangePasswordComponent = /** @class */ (function (_super) {
    __extends(OptFormChangePasswordComponent, _super);
    function OptFormChangePasswordComponent(formBuilder, userService, router) {
        var _this = _super.call(this, formBuilder) || this;
        _this.formBuilder = formBuilder;
        _this.userService = userService;
        _this.router = router;
        _this.SERVER_MESSAGES = {
            400: 'The actual password is incorrect.',
            200: 'Your password was successfully changed.'
        };
        _this.formErrors = {
            actualPassword: '',
            password: '',
            repeatPassword: ''
        };
        _this.VALIDATION_MESSAGES = {
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
        _this.PLACEHOLDERS = {
            actualPassword: 'Actual password',
            password: 'Password',
            repeatPassword: 'Re-enter password'
        };
        _this.LABELS = {
            actualPassword: 'Actual password',
            password: 'Password',
            repeatPassword: 'Re-enter Password'
        };
        _this.SUBMIT_LABEL = 'Update';
        _this.formBuilderGroupControlsConfig = {
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
        _this.formBuilderGroupExtra = {
            validator: OptPasswordValidation.MatchPassword
        };
        return _this;
    }
    OptFormChangePasswordComponent.prototype.submit = function () {
        var self = this;
        var actualPassword = self.form.value.actualPassword;
        var password = self.form.value.password;
        var repeatPassword = self.form.value.repeatPassword;
        self.userService.changePassword(actualPassword, password, repeatPassword)
            .then(function (response) {
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = true;
        })
            .catch(function (response) {
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = false;
        });
    };
    return OptFormChangePasswordComponent;
}(OptFormComponent));
export { OptFormChangePasswordComponent };
//# sourceMappingURL=form-change-password.component.js.map