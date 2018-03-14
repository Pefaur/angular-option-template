// @Component({
//   selector: 'opt-login',
//   templateUrl: './login-v2.component.html',
//   styleUrls: ['./login-v2.component.scss']
// })
var OptLoginV2Component = /** @class */ (function () {
    function OptLoginV2Component(app, router) {
        this.app = app;
        this.router = router;
        this.BACKGROUND_IMAGES = [
            'assets/img/bg-1.jpeg',
            'assets/img/bg-2.jpeg',
            'assets/img/bg-3.jpeg',
            'assets/img/bg-4.jpeg',
            'assets/img/bg-5.jpeg',
            'assets/img/bg-6.jpeg',
            'assets/img/bg-7.jpeg',
            'assets/img/bg-8.jpeg'
        ];
        app.setPageWithoutSidebar(true);
        app.setPageWithoutHeader(true);
        app.setPagePaceTop(true);
    }
    OptLoginV2Component.prototype.goToRegister = function () {
        this.router.navigate(['/register']);
    };
    OptLoginV2Component.prototype.goToForgotPassword = function () {
        this.router.navigate(['/forgot-password']);
    };
    OptLoginV2Component.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-login-v2-ready'));
        var indexImage = Math.floor(Math.random() * this.BACKGROUND_IMAGES.length);
        this.backgroundImage = this.BACKGROUND_IMAGES[indexImage];
    };
    return OptLoginV2Component;
}());
export { OptLoginV2Component };
//# sourceMappingURL=login-v2.component.js.map