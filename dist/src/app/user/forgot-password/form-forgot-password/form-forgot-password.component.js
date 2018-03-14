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
import { OptFormComponent } from '@option/core';
// @Component({
//   selector: 'opt-form-forgot-password',
//   templateUrl: './form-forgot-password.component.html',
//   styleUrls: ['./form-forgot-password.component.scss']
// })
var OptFormForgotPasswordComponent = /** @class */ (function (_super) {
    __extends(OptFormForgotPasswordComponent, _super);
    function OptFormForgotPasswordComponent(formBuilder, authService) {
        var _this = _super.call(this, formBuilder) || this;
        _this.formBuilder = formBuilder;
        _this.authService = authService;
        _this.onSubmitted = new EventEmitter();
        _this.onSubmitError = new EventEmitter();
        _this.formErrors = {
            'email': ''
        };
        _this.VALIDATION_MESSAGES = {
            'email': {
                'required': 'Email is required',
                'email': 'Invalid email'
            }
        };
        _this.SERVER_MESSAGES = {
            204: 'The instructions to recover your password were delivered to your email.',
            400: 'Recovery email already sent before.',
            404: 'User not found.'
        };
        _this.PLACEHOLDERS = {
            'email': 'Email'
        };
        _this.SUMBIT_LABEL = 'Recover password';
        _this.formBuilderGroupControlsConfig = {
            'email': [
                null, [Validators.required, Validators.email]
            ]
        };
        return _this;
    }
    OptFormForgotPasswordComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.requestSubscribes = [];
    };
    OptFormForgotPasswordComponent.prototype.ngOnDestroy = function () {
        // unsubscribe requests
        this.requestSubscribes.map(function (requestSubscribe) {
            requestSubscribe.unsubscribe();
        });
    };
    OptFormForgotPasswordComponent.prototype.submit = function () {
        var _this = this;
        this.requestSubscribes.push(this.authService.recoverPassword(this.form.value.email)
            .subscribe(function (response) {
            _this.onSubmitted.emit();
            _this.setServerMessage(response.statusCode, true);
        }, function (response) {
            _this.onSubmitError.emit();
            _this.setServerMessage(response.statusCode);
        }));
    };
    OptFormForgotPasswordComponent.propDecorators = {
        'onSubmitted': [{ type: Output },],
        'onSubmitError': [{ type: Output },],
    };
    return OptFormForgotPasswordComponent;
}(OptFormComponent));
export { OptFormForgotPasswordComponent };
//# sourceMappingURL=form-forgot-password.component.js.map