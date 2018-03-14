// @Component({
//   selector: 'opt-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
var OptLoginComponent = /** @class */ (function () {
    function OptLoginComponent(app, router) {
        this.app = app;
        this.router = router;
        app.setPageWithoutSidebar(true);
        app.setPageWithoutHeader(true);
        app.setPagePaceTop(true);
    }
    OptLoginComponent.prototype.goToForgotPassword = function () {
        this.router.navigate(['/forgot-password']);
    };
    OptLoginComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-login-ready'));
    };
    return OptLoginComponent;
}());
export { OptLoginComponent };
//# sourceMappingURL=login.component.js.map