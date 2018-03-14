// @Component({
//   selector: 'opt-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
var OptRegisterComponent = /** @class */ (function () {
    function OptRegisterComponent(app, router) {
        this.app = app;
        this.router = router;
        app.setPageWithoutSidebar(true);
        app.setPageWithoutHeader(true);
        app.setPagePaceTop(true);
    }
    OptRegisterComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-register-ready'));
    };
    OptRegisterComponent.prototype.goToLogin = function () {
        this.router.navigate(['/login']);
    };
    return OptRegisterComponent;
}());
export { OptRegisterComponent };
//# sourceMappingURL=register.component.js.map