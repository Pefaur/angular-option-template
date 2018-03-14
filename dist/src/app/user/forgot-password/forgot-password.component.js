// @Component({
//   selector: 'opt-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.scss']
// })
var OptForgotPasswordComponent = /** @class */ (function () {
    function OptForgotPasswordComponent(app, router, formBuilder) {
        this.app = app;
        this.router = router;
        this.formBuilder = formBuilder;
        app.setPageWithoutSidebar(true);
        app.setPageWithoutHeader(true);
        app.setPagePaceTop(true);
    }
    OptForgotPasswordComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-login-ready'));
    };
    OptForgotPasswordComponent.prototype.goToLogin = function () {
        this.router.navigate(['/login']);
    };
    return OptForgotPasswordComponent;
}());
export { OptForgotPasswordComponent };
//# sourceMappingURL=forgot-password.component.js.map