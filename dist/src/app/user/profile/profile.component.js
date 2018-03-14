// @Component({
//   selector: 'opt-profile',
//   templateUrl: './profile.component.html'
// })
var OptProfileComponent = /** @class */ (function () {
    function OptProfileComponent(app) {
        this.app = app;
        app.setPageWithoutHeader(true);
        app.setPageTopMenu(true);
        app.setPageWithoutSidebar(true);
    }
    OptProfileComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-profile-ready'));
    };
    return OptProfileComponent;
}());
export { OptProfileComponent };
//# sourceMappingURL=profile.component.js.map