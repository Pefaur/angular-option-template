// @Component({
//   selector: 'opt-theme-panel',
//   templateUrl: './theme-panel.component.html'
// })
var OptThemePanelComponent = /** @class */ (function () {
    function OptThemePanelComponent() {
    }
    OptThemePanelComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('theme-panel-ready'));
    };
    return OptThemePanelComponent;
}());
export { OptThemePanelComponent };
//# sourceMappingURL=theme-panel.component.js.map