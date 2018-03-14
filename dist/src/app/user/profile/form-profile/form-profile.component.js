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
//   selector: 'opt-form-profile',
//   templateUrl: './form-profile.component.html',
//   styleUrls: ['./form-profile.component.scss']
// })
var OptFormProfileComponent = /** @class */ (function (_super) {
    __extends(OptFormProfileComponent, _super);
    function OptFormProfileComponent(formBuilder, userService, router) {
        var _this = _super.call(this, formBuilder) || this;
        _this.formBuilder = formBuilder;
        _this.userService = userService;
        _this.router = router;
        _this.SERVER_MESSAGES = {
            401: 'Invalid user or password.'
        };
        _this.formErrors = {
            firstName: '',
            lastName: '',
            email: ''
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
            password: {
                required: 'Password is required',
                minlength: 'Password must be at least 8 characters long'
            }
        };
        _this.PLACEHOLDERS = {
            firstName: 'First name',
            lastName: 'Last name',
            email: 'Email address',
            password: 'Password'
        };
        _this.LABELS = {
            name: 'Name',
            email: 'Email',
            password: 'Password'
        };
        _this.SUBMIT_LABEL = 'Update';
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
            password: [
                null, [Validators.required, Validators.minLength(8)]
            ]
        };
        return _this;
    }
    OptFormProfileComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.requestSubscribes = [];
    };
    OptFormProfileComponent.prototype.ngOnDestroy = function () {
        // unsubscribe requests
        this.requestSubscribes.map(function (requestSubscribe) {
            requestSubscribe.unsubscribe();
        });
    };
    OptFormProfileComponent.prototype.submit = function () {
        var _this = this;
        var user = new OptUser();
        user.setFullName(this.form.value.firstName, this.form.value.lastName);
        user.username = this.form.value.email;
        user.password = this.form.value.password;
        user.email = this.form.value.email;
        this.requestSubscribes.push(this.userService.update(user)
            .subscribe(function () {
            _this.router.navigate(['/']);
        }, function (response) {
            _this.setServerMessage(response.statusCode);
        }));
    };
    return OptFormProfileComponent;
}(OptFormComponent));
export { OptFormProfileComponent };
//# sourceMappingURL=form-profile.component.js.map