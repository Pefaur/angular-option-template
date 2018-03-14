// @Component({
//   selector: 'opt-sidebar-two',
//   templateUrl: './sidebar-two.component.html'
// })
var OptSidebarTwoComponent = /** @class */ (function () {
    function OptSidebarTwoComponent() {
    }
    // fire event sidebar-two-ready
    OptSidebarTwoComponent.prototype.ngAfterViewInit = function () {
        window.dispatchEvent(new CustomEvent('sidebar-two-ready'));
    };
    return OptSidebarTwoComponent;
}());
export { OptSidebarTwoComponent };
//# sourceMappingURL=sidebar-two.component.js.map