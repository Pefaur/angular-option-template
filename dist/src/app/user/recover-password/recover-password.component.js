// @Component({
//   selector: 'opt-recover-password',
//   templateUrl: './recover-password.component.html',
//   styleUrls: ['./recover-password.component.scss']
// })
var OptRecoverPasswordComponent = /** @class */ (function () {
    function OptRecoverPasswordComponent(app, router) {
        this.app = app;
        this.router = router;
        app.setPageWithoutSidebar(true);
        app.setPageWithoutHeader(true);
        app.setPagePaceTop(true);
    }
    OptRecoverPasswordComponent.prototype.goToLogin = function () {
        this.router.navigate(['/admin/login']);
    };
    OptRecoverPasswordComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-login-ready'));
    };
    return OptRecoverPasswordComponent;
}());
export { OptRecoverPasswordComponent };
//# sourceMappingURL=recover-password.component.js.map