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
import { EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { OptFormComponent, OptPasswordValidation } from '@option/core';
// @Component({
//   selector: 'opt-form-recover-password',
//   templateUrl: './form-recover-password.component.html',
//   styleUrls: ['./form-recover-password.component.scss']
// })
var OptFormRecoverPasswordComponent = /** @class */ (function (_super) {
    __extends(OptFormRecoverPasswordComponent, _super);
    function OptFormRecoverPasswordComponent(formBuilder, authService, router, activatedRoute) {
        var _this = _super.call(this, formBuilder) || this;
        _this.formBuilder = formBuilder;
        _this.authService = authService;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.onSubmitted = new EventEmitter();
        _this.onSubmitError = new EventEmitter();
        _this.formErrors = {
            'password': '',
            'repeatPassword': ''
        };
        _this.VALIDATION_MESSAGES = {
            'password': {
                'required': 'Password is required',
                'minlength': 'Password must be at least 8 characters long'
            },
            'repeatPassword': {
                'required': 'Repeat password is required',
                'MatchPassword': 'Passwords must be equal'
            }
        };
        _this.SERVER_MESSAGES = {
            204: 'The password successfully changed.',
            404: 'The password change request is invalid.',
            401: 'The password change request was previously used.' // the token is used before
        };
        _this.PLACEHOLDERS = {
            'password': 'Nueva contraseña',
            'repeatPassword': 'Repetir contraseña'
        };
        _this.SUMBIT_LABEL = 'Update password';
        _this.formBuilderGroupControlsConfig = {
            'password': [
                null, [Validators.required, Validators.minLength(8)]
            ],
            'repeatPassword': [
                null, [Validators.required]
            ]
        };
        _this.formBuilderGroupExtra = {
            validator: OptPasswordValidation.MatchPassword
        };
        return _this;
    }
    OptFormRecoverPasswordComponent.prototype.ngOnInit = function () {
        var self = this;
        // subscribe to router event
        this.activatedRoute.params.subscribe(function (params) {
            self.token = params['token'];
        });
        _super.prototype.buildForm.call(this);
    };
    OptFormRecoverPasswordComponent.prototype.goToLogin = function () {
        this.router.navigate(['/login']);
    };
    OptFormRecoverPasswordComponent.prototype.submit = function () {
        var self = this;
        var password = this.form.value.password;
        var passwordConfirmation = this.form.value.password;
        this.authService.resetPassword(this.token, password, passwordConfirmation)
            .then(function (response) {
            self.onSubmitted.emit();
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = true;
        })
            .catch(function (response) {
            self.onSubmitError.emit();
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = false;
        });
    };
    OptFormRecoverPasswordComponent.propDecorators = {
        'onSubmitted': [{ type: Output },],
        'onSubmitError': [{ type: Output },],
    };
    return OptFormRecoverPasswordComponent;
}(OptFormComponent));
export { OptFormRecoverPasswordComponent };
//# sourceMappingURL=form-recover-password.component.js.map