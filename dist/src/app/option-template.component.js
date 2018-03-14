import { NavigationStart } from '@angular/router';
// @Component({
//   selector: 'opt-root',
//   templateUrl: './option-template.component.html'
// })
var OptionTemplateComponent = /** @class */ (function () {
    function OptionTemplateComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.page_sidebar_minified = false;
        this.page_with_footer = false;
        this.page_content_full_height = false;
        this.page_content_full_width = false;
        this.page_sidebar_transparent = false;
        this.page_with_wide_sidebar = false;
        this.page_with_light_sidebar = false;
        this.page_with_right_sidebar = false;
        this.page_without_sidebar = false;
        this.page_with_two_sidebar = false;
        this.page_with_top_menu = false;
        this.page_with_mega_menu = false;
        this.page_boxed_layout = false;
        this.page_content_inverse_mode = false;
        this.page_bg_white = false;
        this.page_without_header = false;
        this.page_pace_top = false;
        router.events.subscribe(function (e) {
            if (e instanceof NavigationStart) {
                _this.clearSettings();
            }
        });
    }
    OptionTemplateComponent.prototype.setPageSidebarMinified = function (setting) {
        this.page_sidebar_minified = setting;
    };
    OptionTemplateComponent.prototype.setPageFooter = function (setting) {
        this.page_with_footer = setting;
    };
    OptionTemplateComponent.prototype.setPageWideSidebar = function (setting) {
        this.page_with_wide_sidebar = setting;
    };
    OptionTemplateComponent.prototype.setPageContentFullHeight = function (setting) {
        this.page_content_full_height = setting;
    };
    OptionTemplateComponent.prototype.setPageContentFullWidth = function (setting) {
        this.page_content_full_width = setting;
    };
    OptionTemplateComponent.prototype.setPageSidebarTransparent = function (setting) {
        this.page_sidebar_transparent = setting;
    };
    OptionTemplateComponent.prototype.setPageLightSidebar = function (setting) {
        this.page_with_light_sidebar = setting;
    };
    OptionTemplateComponent.prototype.setPageRightSidebar = function (setting) {
        this.page_with_right_sidebar = setting;
    };
    OptionTemplateComponent.prototype.setPageWithoutSidebar = function (setting) {
        this.page_without_sidebar = setting;
    };
    OptionTemplateComponent.prototype.setPageTwoSidebar = function (setting) {
        this.page_with_two_sidebar = setting;
    };
    OptionTemplateComponent.prototype.setPageTopMenu = function (setting) {
        this.page_with_top_menu = setting;
    };
    OptionTemplateComponent.prototype.setPageTransparentSidebar = function (setting) {
        this.page_sidebar_transparent = setting;
    };
    OptionTemplateComponent.prototype.setPageMegaMenu = function (setting) {
        this.page_with_mega_menu = setting;
    };
    OptionTemplateComponent.prototype.setPageContentInverseMode = function (setting) {
        this.page_content_inverse_mode = setting;
    };
    OptionTemplateComponent.prototype.setPageBoxedLayout = function (setting) {
        this.page_boxed_layout = setting;
        if (this.page_boxed_layout) {
            window.dispatchEvent(new CustomEvent('page-boxed-layout'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-boxed-layout'));
        }
    };
    OptionTemplateComponent.prototype.setPageBgWhite = function (setting) {
        this.page_bg_white = setting;
        if (this.page_bg_white) {
            window.dispatchEvent(new CustomEvent('page-bg-white'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-bg-white'));
        }
    };
    OptionTemplateComponent.prototype.setPageWithoutHeader = function (setting) {
        this.page_without_header = setting;
        if (this.page_without_header) {
            window.dispatchEvent(new CustomEvent('page-without-header'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-without-header'));
        }
    };
    OptionTemplateComponent.prototype.setPagePaceTop = function (setting) {
        this.page_pace_top = setting;
        if (this.page_without_header) {
            window.dispatchEvent(new CustomEvent('page-pace-top'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-pace-top'));
        }
    };
    OptionTemplateComponent.prototype.clearSettings = function () {
        this.page_sidebar_minified = false;
        this.page_with_footer = false;
        this.page_content_full_height = false;
        this.page_content_full_width = false;
        this.page_with_wide_sidebar = false;
        this.page_with_right_sidebar = false;
        this.page_with_light_sidebar = false;
        this.page_sidebar_transparent = false;
        this.page_without_sidebar = false;
        this.page_with_two_sidebar = false;
        this.page_with_top_menu = false;
        this.page_sidebar_transparent = false;
        this.page_with_mega_menu = false;
        this.page_boxed_layout = false;
        this.page_content_inverse_mode = false;
        this.page_bg_white = false;
        this.page_without_header = false;
        this.page_pace_top = false;
        if (this.page_bg_white) {
            window.dispatchEvent(new CustomEvent('page-bg-white'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-bg-white'));
        }
        if (this.page_boxed_layout) {
            window.dispatchEvent(new CustomEvent('page-boxed-layout'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-boxed-layout'));
        }
        if (this.page_without_header) {
            window.dispatchEvent(new CustomEvent('page-without-header'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-without-header'));
        }
        if (this.page_pace_top) {
            window.dispatchEvent(new CustomEvent('page-pace-top'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-pace-top'));
        }
    };
    OptionTemplateComponent.prototype.ngOnInit = function () {
    };
    return OptionTemplateComponent;
}());
export { OptionTemplateComponent };
//# sourceMappingURL=option-template.component.js.map