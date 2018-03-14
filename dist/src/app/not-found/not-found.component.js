// @Component({
//   selector: 'opt-not-found',
//   templateUrl: './not-found.component.html',
//   styleUrls: ['./not-found.component.scss']
// })
var OptNotFoundComponent = /** @class */ (function () {
    function OptNotFoundComponent(app, router) {
        this.app = app;
        this.router = router;
        app.setPageWithoutHeader(true);
        app.setPageTopMenu(false);
        app.setPageWithoutSidebar(true);
    }
    OptNotFoundComponent.prototype.goToHome = function () {
        this.router.navigate(['/']);
    };
    return OptNotFoundComponent;
}());
export { OptNotFoundComponent };
//# sourceMappingURL=not-found.component.js.map