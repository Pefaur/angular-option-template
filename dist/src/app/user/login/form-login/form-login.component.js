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
import { OptFormComponent } from '@option/core';
// @Component({
//   selector: 'opt-form-login',
//   templateUrl: './form-login.component.html',
//   styleUrls: ['./form-login.component.scss']
// })
var OptFormLoginComponent = /** @class */ (function (_super) {
    __extends(OptFormLoginComponent, _super);
    function OptFormLoginComponent(formBuilder, authService, router) {
        var _this = _super.call(this, formBuilder) || this;
        _this.formBuilder = formBuilder;
        _this.authService = authService;
        _this.router = router;
        _this.SERVER_MESSAGES = {
            401: 'Invalid user or password.'
        };
        _this.formErrors = {
            email: '',
            password: ''
        };
        _this.VALIDATION_MESSAGES = {
            email: {
                required: 'Email is required',
                email: 'Invalid email'
            },
            password: {
                required: 'Password is required',
                minlength: 'Password must be at least 8 characters long'
            }
        };
        _this.PLACEHOLDERS = {
            email: 'Email',
            password: 'Password'
        };
        _this.SUBMIT_LABEL = 'Log in';
        _this.formBuilderGroupControlsConfig = {
            email: [
                null, [Validators.required, Validators.email]
            ],
            password: [
                null, [Validators.required, Validators.minLength(8)]
            ]
        };
        return _this;
    }
    OptFormLoginComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.requestSubscribes = [];
    };
    OptFormLoginComponent.prototype.ngOnDestroy = function () {
        // unsubscribe requests
        this.requestSubscribes.map(function (requestSubscribe) {
            requestSubscribe.unsubscribe();
        });
    };
    OptFormLoginComponent.prototype.submit = function () {
        var _this = this;
        this.requestSubscribes.push(this.authService.login(this.form.value.email, this.form.value.password)
            .subscribe(function () {
            _this.router.navigate(['/']);
        }, function (response) {
            _this.setServerMessage(response.statusCode);
        }));
    };
    return OptFormLoginComponent;
}(OptFormComponent));
export { OptFormLoginComponent };
//# sourceMappingURL=form-login.component.js.map