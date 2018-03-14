(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@option/core'), require('@angular/router'), require('@angular/platform-browser'), require('@angular/http'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@option/core', '@angular/router', '@angular/platform-browser', '@angular/http', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['opt-template'] = {}),global.ng.core,global.ng.forms,global.opt.core,global.ng.router,global.ng['platform-browser'],global.ng.http,global.ng.common));
}(this, (function (exports,core,forms,core$1,router,platformBrowser,http,common) { 'use strict';

// @Component({
//   selector: 'opt-content',
//   templateUrl: './content.component.html'
// })
var OptContentComponent = /** @class */ (function () {
    function OptContentComponent() {
    }
    OptContentComponent.prototype.ngOnInit = function () {
    };
    OptContentComponent.propDecorators = {
        'page_content_full_width': [{ type: core.Input },],
        'page_content_inverse_mode': [{ type: core.Input },],
    };
    return OptContentComponent;
}());

// @Component({
//   selector: 'opt-cover',
//   templateUrl: './cover.component.html',
//   styleUrls: ['./cover.component.scss']
// })
var OptCoverComponent = /** @class */ (function () {
    function OptCoverComponent() {
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
    }
    OptCoverComponent.prototype.ngOnInit = function () {
        var indexImage = Math.floor(Math.random() * this.BACKGROUND_IMAGES.length);
        this.backgroundImage = this.BACKGROUND_IMAGES[indexImage];
    };
    return OptCoverComponent;
}());

// @Component({
//   selector: 'opt-footer',
//   templateUrl: './footer.component.html'
// })
var OptFooterComponent = /** @class */ (function () {
    function OptFooterComponent() {
    }
    OptFooterComponent.prototype.ngOnInit = function () {
    };
    return OptFooterComponent;
}());

// @Component({
//   selector: 'opt-header',
//   templateUrl: './header.component.html'
// })
var OptHeaderComponent = /** @class */ (function () {
    function OptHeaderComponent() {
    }
    OptHeaderComponent.prototype.ngOnInit = function () {
    };
    OptHeaderComponent.propDecorators = {
        'page_with_two_sidebar': [{ type: core.Input },],
        'page_with_mega_menu': [{ type: core.Input },],
    };
    return OptHeaderComponent;
}());

// @Component({
//   selector: 'opt-mega-menu',
//   templateUrl: './mega-menu.component.html'
// })
var OptMegaMenuComponent = /** @class */ (function () {
    function OptMegaMenuComponent() {
    }
    OptMegaMenuComponent.prototype.ngOnInit = function () {
    };
    return OptMegaMenuComponent;
}());

// @Component({
//   selector: 'opt-not-found',
//   templateUrl: './not-found.component.html',
//   styleUrls: ['./not-found.component.scss']
// })
var OptNotFoundComponent = /** @class */ (function () {
    function OptNotFoundComponent(app, router$$1) {
        this.app = app;
        this.router = router$$1;
        app.setPageWithoutHeader(true);
        app.setPageTopMenu(false);
        app.setPageWithoutSidebar(true);
    }
    OptNotFoundComponent.prototype.goToHome = function () {
        this.router.navigate(['/']);
    };
    return OptNotFoundComponent;
}());

// @Component({
//   selector: 'opt-sidebar',
//   templateUrl: './sidebar.component.html'
// })
var OptSidebarComponent = /** @class */ (function () {
    function OptSidebarComponent() {
        // menu list
        this.menu = [{
                title: 'Dashboard',
                icon: 'fa fa-laptop',
                link: '',
                caret: 'true',
                submenu: [{
                        title: 'Dashboard v1',
                        link: '/dashboard/v1'
                    }, {
                        title: 'Dashboard v2',
                        link: '/dashboard/v2'
                    }]
            }, {
                title: 'Email',
                icon: 'fa fa-inbox',
                link: '',
                badge: '10',
                submenu: [{
                        title: 'Inbox v1',
                        link: '/email/inbox/v1'
                    }, {
                        title: 'Inbox v2',
                        link: '/email/inbox/v2'
                    }, {
                        title: 'Compose',
                        link: '/email/compose'
                    }, {
                        title: 'Detail',
                        link: '/email/detail'
                    }]
            }, {
                title: 'UI Elements',
                icon: 'fa fa-suitcase',
                link: '',
                label: 'NEW',
                caret: true,
                submenu: [{
                        title: 'General',
                        link: '/ui/general'
                    }, {
                        title: 'Typography',
                        link: '/ui/typography'
                    }, {
                        title: 'Tabs & Accordions',
                        link: '/ui/tabs-accordions'
                    }, {
                        title: 'Unlimited Nav Tabs',
                        link: '/ui/unlimited-nav-tabs'
                    }, {
                        title: 'Modal & Notification',
                        link: '/ui/modal-notification'
                    }, {
                        title: 'Widget Boxes',
                        link: '/ui/widget-boxes'
                    }, {
                        title: 'Media Object',
                        link: '/ui/media-object'
                    }, {
                        title: 'Buttons',
                        link: '/ui/buttons'
                    }, {
                        title: 'Icons',
                        link: '/ui/icons'
                    }, {
                        title: 'Simple Line Icons',
                        link: '/ui/simple-line-icons'
                    }, {
                        title: 'Ionicons',
                        link: '/ui/ionicons'
                    }, {
                        title: 'Tree View',
                        link: '/ui/tree-view'
                    }, {
                        title: 'Language Bar & Icon',
                        link: '/ui/language-bar-icon'
                    }, {
                        title: 'Social Buttons',
                        link: '/ui/social-buttons',
                        highlight: 'true'
                    }, {
                        title: 'Intro JS',
                        link: '/ui/intro-js',
                        highlight: 'true'
                    }]
            }, {
                title: 'Form Stuff',
                icon: 'fa fa-file-o',
                link: '',
                label: 'NEW',
                caret: true,
                submenu: [{
                        title: 'Form Elements',
                        link: '/form/elements'
                    }, {
                        title: 'Form Plugins',
                        link: '/form/plugins'
                    }, {
                        title: 'Form Slider + Switcher',
                        link: '/form/slider-switcher'
                    }, {
                        title: 'Form Validation',
                        link: '/form/validation'
                    }, {
                        title: 'WYSIWYG',
                        link: '/form/wysiwyg'
                    }, {
                        title: 'Summernote',
                        link: '/form/summernote',
                        highlight: 'true'
                    }]
            }, {
                title: 'Tables',
                icon: 'fa fa-th',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Basic Tables',
                        link: '/table/basic'
                    }, {
                        title: 'Managed Tables',
                        link: '',
                        caret: true,
                        submenu: [{
                                title: 'Default',
                                link: '/table/manage/default'
                            }, {
                                title: 'Autofill',
                                link: '/table/manage/autofill'
                            }, {
                                title: 'Buttons',
                                link: '/table/manage/buttons'
                            }, {
                                title: 'ColReorder',
                                link: '/table/manage/colreorder'
                            }, {
                                title: 'Fixed Column',
                                link: '/table/manage/fixed-columns'
                            }, {
                                title: 'Fixed Header',
                                link: '/table/manage/fixed-header'
                            }, {
                                title: 'KeyTable',
                                link: '/table/manage/keytable'
                            }, {
                                title: 'Responsive',
                                link: '/table/manage/responsive'
                            }, {
                                title: 'RowReorder',
                                link: '/table/manage/rowreorder'
                            }, {
                                title: 'Scroller',
                                link: '/table/manage/scroller'
                            }, {
                                title: 'Select',
                                link: '/table/manage/select'
                            }, {
                                title: 'Extension Combination',
                                link: '/table/manage/combine'
                            }]
                    }]
            }, {
                title: 'Front End',
                icon: 'fa fa-star',
                link: '',
                caret: true,
                submenu: [{
                        title: 'One Page Parallax',
                        link: '../../frontend/one-page-parallax/template_content_html/index.html',
                        external: true
                    }, {
                        title: 'Blog',
                        link: '../../frontend/blog/template_content_html/index.html',
                        external: true
                    }, {
                        title: 'Forum',
                        link: '../../frontend/forum/template_content_html/index.html',
                        external: true
                    }, {
                        title: 'E-Commerce',
                        link: '../../frontend/e-commerce/template_content_html/index.html',
                        external: true
                    }]
            }, {
                title: 'Email Template',
                icon: 'fa fa-envelope',
                link: '',
                caret: true,
                submenu: [{
                        title: 'System Template',
                        link: '/app/email_system.html',
                        external: true
                    }, {
                        title: 'Newsletter Template',
                        link: '/app/email_newsletter.html',
                        external: true
                    }]
            }, {
                title: 'Chart',
                icon: 'fa fa-area-chart',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Flot Chart',
                        link: '/chart/flot'
                    }, {
                        title: 'Morris Chart',
                        link: '/chart/morris'
                    }, {
                        title: 'Chart JS',
                        link: '/chart/js'
                    }, {
                        title: 'd3 Chart',
                        link: '/chart/d3'
                    }]
            }, {
                title: 'Calendar',
                icon: 'fa fa-calendar',
                link: '/calendar'
            }, {
                title: 'Map',
                icon: 'fa fa-map-marker',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Vector Map',
                        link: '/map/vector'
                    }, {
                        title: 'Google Map',
                        link: '/map/google'
                    }]
            }, {
                title: 'Gallery',
                icon: 'fa fa-camera',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Gallery v1',
                        link: '/gallery/v1'
                    }, {
                        title: 'Gallery v2',
                        link: '/gallery/v2'
                    }]
            }, {
                title: 'Page Options',
                icon: 'fa fa-cogs',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Blank Page',
                        link: '/page/blank'
                    }, {
                        title: 'Page with Footer',
                        link: '/page/with-footer'
                    }, {
                        title: 'Page without Sidebar',
                        link: '/page/without-sidebar'
                    }, {
                        title: 'Page with Right Sidebar',
                        link: '/page/with-right-sidebar'
                    }, {
                        title: 'Page with Minified Sidebar',
                        link: '/page/with-minified-sidebar'
                    }, {
                        title: 'Page with Two Sidebar',
                        link: '/page/with-two-sidebar'
                    }, {
                        title: 'Full Height Content',
                        link: '/page/full-height-content'
                    }, {
                        title: 'Page with Wide Sidebar',
                        link: '/page/with-wide-sidebar'
                    }, {
                        title: 'Page with Light Sidebar',
                        link: '/page/with-light-sidebar'
                    }, {
                        title: 'Page with Mega Menu',
                        link: '/page/with-mega-menu'
                    }, {
                        title: 'Page with Top Menu',
                        link: '/page/with-top-menu'
                    }, {
                        title: 'Page with Boxed Layout',
                        link: '/page/with-boxed-layout'
                    }, {
                        title: 'Page with Mixed Menu',
                        link: '/page/with-mixed-menu'
                    }, {
                        title: 'Boxed Layout with Mixed Menu',
                        link: '/page/boxed-layout-with-mixed-menu'
                    }, {
                        title: 'Page with Transparent Sidebar',
                        link: '/page/with-transparent-sidebar'
                    }]
            }, {
                title: 'Extra',
                icon: 'fa fa-gift',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Timeline',
                        link: '/extra/timeline'
                    }, {
                        title: 'Coming Soon Page',
                        link: '/extra/coming-soon'
                    }, {
                        title: 'Search Results',
                        link: '/extra/search'
                    }, {
                        title: 'Invoice',
                        link: '/extra/invoice'
                    }, {
                        title: '404 Error Page',
                        link: '/extra/error'
                    }, {
                        title: 'Profile Page',
                        link: '/extra/profile'
                    }]
            }, {
                title: 'Login & Register',
                icon: 'fa fa-key',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Login',
                        link: '/user/login'
                    }, {
                        title: 'Login v2',
                        link: '/user/login-v2'
                    }, {
                        title: 'Login v3',
                        link: '/user/login-v3'
                    }, {
                        title: 'Register v3',
                        link: '/user/register-v3'
                    }]
            }, {
                title: 'Version',
                icon: 'fa fa-cubes',
                link: '',
                caret: true,
                label: 'NEW',
                submenu: [{
                        title: 'HTML',
                        link: '/../admin/template_content_html/index.html',
                        external: true
                    }, {
                        title: 'AJAX',
                        link: '/../admin/template_content_ajax/index.html',
                        external: true
                    }, {
                        title: 'ANGULAR JS',
                        link: '/../admin/template_content_angularjs/index.html',
                        external: true
                    }, {
                        title: 'ANGULAR JS 2',
                        link: '',
                        highlight: true
                    }, {
                        title: 'MATERIAL DESIGN',
                        link: '/../admin/template_content_material_design/index.html',
                        external: true
                    }]
            }, {
                title: 'Helper',
                icon: 'fa fa-medkit',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Predefined CSS Classes',
                        link: '/helper/css'
                    }]
            }, {
                title: 'Menu Level',
                icon: 'fa fa-align-left',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Menu 1.1',
                        link: '',
                        caret: true,
                        submenu: [{
                                title: 'Menu 2.1',
                                link: '',
                                caret: true,
                                submenu: [{
                                        title: 'Menu 3.1',
                                        link: ''
                                    }, {
                                        title: 'Menu 3.2',
                                        link: ''
                                    }, {
                                        title: 'Menu 3.3',
                                        link: ''
                                    }]
                            }, {
                                title: 'Menu 2.2',
                                link: ''
                            }, {
                                title: 'Menu 2.3',
                                link: ''
                            }]
                    }, {
                        title: 'Menu 1.2',
                        link: ''
                    }, {
                        title: 'Menu 1.3',
                        link: ''
                    }]
            }];
    }
    // fire event sidebar-ready
    OptSidebarComponent.prototype.ngAfterViewInit = function () {
        window.dispatchEvent(new CustomEvent('sidebar-ready'));
    };
    OptSidebarComponent.propDecorators = {
        'page_sidebar_transparent': [{ type: core.Input },],
    };
    return OptSidebarComponent;
}());

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

// @Component({
//   selector: 'opt-top-menu',
//   templateUrl: './top-menu.component.html'
// })
var OptTopMenuComponent = /** @class */ (function () {
    function OptTopMenuComponent() {
        this.menu = [{
                title: 'Dashboard',
                icon: 'fa fa-laptop',
                link: '',
                caret: 'true',
                submenu: [{
                        title: 'Dashboard v1',
                        link: '/dashboard/v1'
                    }, {
                        title: 'Dashboard v2',
                        link: '/dashboard/v2'
                    }]
            }, {
                title: 'Email',
                icon: 'fa fa-inbox',
                link: '',
                badge: '10',
                submenu: [{
                        title: 'Inbox v1',
                        link: '/email/inbox/v1'
                    }, {
                        title: 'Inbox v2',
                        link: '/email/inbox/v2'
                    }, {
                        title: 'Compose',
                        link: '/email/compose'
                    }, {
                        title: 'Detail',
                        link: '/email/detail'
                    }]
            }, {
                title: 'UI Elements',
                icon: 'fa fa-suitcase',
                link: '',
                label: 'NEW',
                caret: true,
                submenu: [{
                        title: 'General',
                        link: '/ui/general'
                    }, {
                        title: 'Typography',
                        link: '/ui/typography'
                    }, {
                        title: 'Tabs & Accordions',
                        link: '/ui/tabs-accordions'
                    }, {
                        title: 'Unlimited Nav Tabs',
                        link: '/ui/unlimited-nav-tabs'
                    }, {
                        title: 'Modal & Notification',
                        link: '/ui/modal-notification'
                    }, {
                        title: 'Widget Boxes',
                        link: '/ui/widget-boxes'
                    }, {
                        title: 'Media Object',
                        link: '/ui/media-object'
                    }, {
                        title: 'Buttons',
                        link: '/ui/buttons'
                    }, {
                        title: 'Icons',
                        link: '/ui/icons'
                    }, {
                        title: 'Simple Line Icons',
                        link: '/ui/simple-line-icons'
                    }, {
                        title: 'Ionicons',
                        link: '/ui/ionicons'
                    }, {
                        title: 'Tree View',
                        link: '/ui/tree-view'
                    }, {
                        title: 'Language Bar & Icon',
                        link: '/ui/language-bar-icon'
                    }, {
                        title: 'Social Buttons',
                        link: '/ui/social-buttons',
                        highlight: 'true'
                    }, {
                        title: 'Intro JS',
                        link: '/ui/intro-js',
                        highlight: 'true'
                    }]
            }, {
                title: 'Form Stuff',
                icon: 'fa fa-file-o',
                link: '',
                label: 'NEW',
                caret: true,
                submenu: [{
                        title: 'Form Elements',
                        link: '/form/elements'
                    }, {
                        title: 'Form Plugins',
                        link: '/form/plugins'
                    }, {
                        title: 'Form Slider + Switcher',
                        link: '/form/slider-switcher'
                    }, {
                        title: 'Form Validation',
                        link: '/form/validation'
                    }, {
                        title: 'WYSIWYG',
                        link: '/form/wysiwyg'
                    }, {
                        title: 'Summernote',
                        link: '/form/summernote',
                        highlight: 'true'
                    }]
            }, {
                title: 'Tables',
                icon: 'fa fa-th',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Basic Tables',
                        link: '/table/basic'
                    }, {
                        title: 'Managed Tables',
                        link: '',
                        caret: true,
                        submenu: [{
                                title: 'Default',
                                link: '/table/manage/default'
                            }, {
                                title: 'Autofill',
                                link: '/table/manage/autofill'
                            }, {
                                title: 'Buttons',
                                link: '/table/manage/buttons'
                            }, {
                                title: 'ColReorder',
                                link: '/table/manage/colreorder'
                            }, {
                                title: 'Fixed Column',
                                link: '/table/manage/fixed-columns'
                            }, {
                                title: 'Fixed Header',
                                link: '/table/manage/fixed-header'
                            }, {
                                title: 'KeyTable',
                                link: '/table/manage/keytable'
                            }, {
                                title: 'Responsive',
                                link: '/table/manage/responsive'
                            }, {
                                title: 'RowReorder',
                                link: '/table/manage/rowreorder'
                            }, {
                                title: 'Scroller',
                                link: '/table/manage/scroller'
                            }, {
                                title: 'Select',
                                link: '/table/manage/select'
                            }, {
                                title: 'Extension Combination',
                                link: '/table/manage/combine'
                            }]
                    }]
            }, {
                title: 'Front End',
                icon: 'fa fa-star',
                link: '',
                caret: true,
                submenu: [{
                        title: 'One Page Parallax',
                        link: '/../../frontend/one-page-parallax/template_content_html/index.html',
                        external: true
                    }, {
                        title: 'Blog',
                        link: '/../../frontend/blog/template_content_html/index.html',
                        external: true
                    }, {
                        title: 'Forum',
                        link: '/../../frontend/forum/template_content_html/index.html',
                        external: true
                    }, {
                        title: 'E-Commerce',
                        link: '/../../frontend/e-commerce/template_content_html/index.html',
                        external: true
                    }]
            }, {
                title: 'Email Template',
                icon: 'fa fa-envelope',
                link: '',
                caret: true,
                submenu: [{
                        title: 'System Template',
                        link: '/app/email_system.html',
                        external: true
                    }, {
                        title: 'Newsletter Template',
                        link: '/app/email_newsletter.html',
                        external: true
                    }]
            }, {
                title: 'Chart',
                icon: 'fa fa-area-chart',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Flot Chart',
                        link: '/chart/flot'
                    }, {
                        title: 'Morris Chart',
                        link: '/chart/morris'
                    }, {
                        title: 'Chart JS',
                        link: '/chart/js'
                    }, {
                        title: 'd3 Chart',
                        link: '/chart/d3'
                    }]
            }, {
                title: 'Calendar',
                icon: 'fa fa-calendar',
                link: '/calendar'
            }, {
                title: 'Map',
                icon: 'fa fa-map-marker',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Vector Map',
                        link: '/map/vector'
                    }, {
                        title: 'Google Map',
                        link: '/map/google'
                    }]
            }, {
                title: 'Gallery',
                icon: 'fa fa-camera',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Gallery v1',
                        link: '/gallery/v1'
                    }, {
                        title: 'Gallery v2',
                        link: '/gallery/v2'
                    }]
            }, {
                title: 'Page Options',
                icon: 'fa fa-cogs',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Blank Page',
                        link: '/page/blank'
                    }, {
                        title: 'Page with Footer',
                        link: '/page/with-footer'
                    }, {
                        title: 'Page without Sidebar',
                        link: '/page/without-sidebar'
                    }, {
                        title: 'Page with Right Sidebar',
                        link: '/page/with-right-sidebar'
                    }, {
                        title: 'Page with Minified Sidebar',
                        link: '/page/with-minified-sidebar'
                    }, {
                        title: 'Page with Two Sidebar',
                        link: '/page/with-two-sidebar'
                    }, {
                        title: 'Full Height Content',
                        link: '/page/full-height-content'
                    }, {
                        title: 'Page with Wide Sidebar',
                        link: '/page/with-wide-sidebar'
                    }, {
                        title: 'Page with Light Sidebar',
                        link: '/page/with-light-sidebar'
                    }, {
                        title: 'Page with Mega Menu',
                        link: '/page/with-mega-menu'
                    }, {
                        title: 'Page with Top Menu',
                        link: '/page/with-top-menu'
                    }, {
                        title: 'Page with Boxed Layout',
                        link: '/page/with-boxed-layout'
                    }, {
                        title: 'Page with Mixed Menu',
                        link: '/page/with-mixed-menu'
                    }, {
                        title: 'Boxed Layout with Mixed Menu',
                        link: '/page/boxed-layout-with-mixed-menu'
                    }, {
                        title: 'Page with Transparent Sidebar',
                        link: '/page/with-transparent-sidebar'
                    }]
            }, {
                title: 'Extra',
                icon: 'fa fa-gift',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Timeline',
                        link: '/extra/timeline'
                    }, {
                        title: 'Coming Soon Page',
                        link: '/extra/coming-soon'
                    }, {
                        title: 'Search Results',
                        link: '/extra/search'
                    }, {
                        title: 'Invoice',
                        link: '/extra/invoice'
                    }, {
                        title: '404 Error Page',
                        link: '/extra/error'
                    }, {
                        title: 'Profile Page',
                        link: '/extra/profile'
                    }]
            }, {
                title: 'Login & Register',
                icon: 'fa fa-key',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Login',
                        link: '/user/login'
                    }, {
                        title: 'Login v2',
                        link: '/user/login-v2'
                    }, {
                        title: 'Login v3',
                        link: '/user/login-v3'
                    }, {
                        title: 'Register v3',
                        link: '/user/register-v3'
                    }]
            }, {
                title: 'Version',
                icon: 'fa fa-cubes',
                link: '',
                caret: true,
                label: 'NEW',
                submenu: [{
                        title: 'HTML',
                        link: '/../admin/template_content_html/index.html',
                        external: true
                    }, {
                        title: 'AJAX',
                        link: '/../admin/template_content_ajax/index.html',
                        external: true
                    }, {
                        title: 'ANGULAR JS',
                        link: '/../admin/template_content_angularjs/index.html',
                        external: true
                    }, {
                        title: 'ANGULAR JS 2',
                        link: '',
                        highlight: true
                    }, {
                        title: 'MATERIAL DESIGN',
                        link: '/../admin/template_content_material_design/index.html',
                        external: true
                    }]
            }, {
                title: 'Helper',
                icon: 'fa fa-medkit',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Predefined CSS Classes',
                        link: '/helper/css'
                    }]
            }, {
                title: 'Menu Level',
                icon: 'fa fa-align-left',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Menu 1.1',
                        link: '',
                        caret: true,
                        submenu: [{
                                title: 'Menu 2.1',
                                link: '',
                                caret: true,
                                submenu: [{
                                        title: 'Menu 3.1',
                                        link: ''
                                    }, {
                                        title: 'Menu 3.2',
                                        link: ''
                                    }, {
                                        title: 'Menu 3.3',
                                        link: ''
                                    }]
                            }, {
                                title: 'Menu 2.2',
                                link: ''
                            }, {
                                title: 'Menu 2.3',
                                link: ''
                            }]
                    }, {
                        title: 'Menu 1.2',
                        link: ''
                    }, {
                        title: 'Menu 1.3',
                        link: ''
                    }]
            }];
    }
    // fire event sidebar-two-ready
    OptTopMenuComponent.prototype.ngAfterViewInit = function () {
        window.dispatchEvent(new CustomEvent('top-menu-ready'));
    };
    return OptTopMenuComponent;
}());

// @Component({
//   selector: 'opt-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.scss']
// })
var OptForgotPasswordComponent = /** @class */ (function () {
    function OptForgotPasswordComponent(app, router$$1, formBuilder) {
        this.app = app;
        this.router = router$$1;
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

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @Component({
//   selector: 'opt-form-forgot-password',
//   templateUrl: './form-forgot-password.component.html',
//   styleUrls: ['./form-forgot-password.component.scss']
// })
var OptFormForgotPasswordComponent = /** @class */ (function (_super) {
    __extends(OptFormForgotPasswordComponent, _super);
    function OptFormForgotPasswordComponent(formBuilder, authService) {
        var _this = _super.call(this, formBuilder) || this;
        _this.formBuilder = formBuilder;
        _this.authService = authService;
        _this.onSubmitted = new core.EventEmitter();
        _this.onSubmitError = new core.EventEmitter();
        _this.formErrors = {
            'email': ''
        };
        _this.VALIDATION_MESSAGES = {
            'email': {
                'required': 'Email is required',
                'email': 'Invalid email'
            }
        };
        _this.SERVER_MESSAGES = {
            204: 'The instructions to recover your password were delivered to your email.',
            400: 'Recovery email already sent before.',
            404: 'User not found.'
        };
        _this.PLACEHOLDERS = {
            'email': 'Email'
        };
        _this.SUMBIT_LABEL = 'Recover password';
        _this.formBuilderGroupControlsConfig = {
            'email': [
                null, [forms.Validators.required, forms.Validators.email]
            ]
        };
        return _this;
    }
    OptFormForgotPasswordComponent.prototype.submit = function () {
        var self = this;
        self.authService.recoverPassword(self.form.value.email)
            .then(function (response) {
            self.onSubmitted.emit();
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = true;
        })
            .catch(function (response) {
            self.onSubmitError.emit();
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = false;
        });
    };
    OptFormForgotPasswordComponent.propDecorators = {
        'onSubmitted': [{ type: core.Output },],
        'onSubmitError': [{ type: core.Output },],
    };
    return OptFormForgotPasswordComponent;
}(core$1.OptFormComponent));

// @Component({
//   selector: 'opt-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
var OptLoginComponent = /** @class */ (function () {
    function OptLoginComponent(app, router$$1) {
        this.app = app;
        this.router = router$$1;
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

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @Component({
//   selector: 'opt-form-login',
//   templateUrl: './form-login.component.html',
//   styleUrls: ['./form-login.component.scss']
// })
var OptFormLoginComponent = /** @class */ (function (_super) {
    __extends$1(OptFormLoginComponent, _super);
    function OptFormLoginComponent(formBuilder, authService, router$$1) {
        var _this = _super.call(this, formBuilder) || this;
        _this.formBuilder = formBuilder;
        _this.authService = authService;
        _this.router = router$$1;
        _this.SERVER_MESSAGES = {
            401: 'Invalid user or password.'
        };
        _this.formErrors = {
            email: '',
            password: ''
        };
        _this.VALIDATION_MESSAGES = {
            email: {
                required: 'Email is required',
                email: 'Invalid email'
            },
            password: {
                required: 'Password is required',
                minlength: 'Password must be at least 8 characters long'
            }
        };
        _this.PLACEHOLDERS = {
            email: 'Email',
            password: 'Password'
        };
        _this.SUBMIT_LABEL = 'Log in';
        _this.formBuilderGroupControlsConfig = {
            email: [
                null, [forms.Validators.required, forms.Validators.email]
            ],
            password: [
                null, [forms.Validators.required, forms.Validators.minLength(8)]
            ]
        };
        return _this;
    }
    OptFormLoginComponent.prototype.submit = function () {
        var self = this;
        this.authService.login(self.form.value.email, self.form.value.password)
            .then(function () {
            self.router.navigate(['/']);
        })
            .catch(function (response) {
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = false;
        });
    };
    return OptFormLoginComponent;
}(core$1.OptFormComponent));

// @Component({
//   selector: 'opt-login',
//   templateUrl: './login-v2.component.html',
//   styleUrls: ['./login-v2.component.scss']
// })
var OptLoginV2Component = /** @class */ (function () {
    function OptLoginV2Component(app, router$$1) {
        this.app = app;
        this.router = router$$1;
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

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @Component({
//   selector: 'opt-form-profile',
//   templateUrl: './form-profile.component.html',
//   styleUrls: ['./form-profile.component.scss']
// })
var OptFormProfileComponent = /** @class */ (function (_super) {
    __extends$2(OptFormProfileComponent, _super);
    function OptFormProfileComponent(formBuilder, userService, router$$1) {
        var _this = _super.call(this, formBuilder) || this;
        _this.formBuilder = formBuilder;
        _this.userService = userService;
        _this.router = router$$1;
        _this.SERVER_MESSAGES = {
            401: 'Invalid user or password.'
        };
        _this.formErrors = {
            firstName: '',
            lastName: '',
            email: ''
        };
        _this.VALIDATION_MESSAGES = {
            firstName: {
                required: 'First name is required'
            },
            lastName: {
                required: 'Last name is required'
            },
            email: {
                required: 'Email is required',
                email: 'Invalid email'
            },
            password: {
                required: 'Password is required',
                minlength: 'Password must be at least 8 characters long'
            }
        };
        _this.PLACEHOLDERS = {
            firstName: 'First name',
            lastName: 'Last name',
            email: 'Email address',
            password: 'Password'
        };
        _this.LABELS = {
            name: 'Name',
            email: 'Email',
            password: 'Password'
        };
        _this.SUBMIT_LABEL = 'Update';
        _this.formBuilderGroupControlsConfig = {
            firstName: [
                null, [forms.Validators.required]
            ],
            lastName: [
                null, [forms.Validators.required]
            ],
            email: [
                null, [forms.Validators.required, forms.Validators.email]
            ],
            password: [
                null, [forms.Validators.required, forms.Validators.minLength(8)]
            ]
        };
        return _this;
    }
    OptFormProfileComponent.prototype.submit = function () {
        var self = this;
        var user = new core$1.OptUser();
        user.setFullName(self.form.value.firstName, self.form.value.lastName);
        user.username = self.form.value.email;
        user.password = self.form.value.password;
        user.email = self.form.value.email;
        self.userService.update(user)
            .then(function () {
            self.router.navigate(['/']);
        })
            .catch(function (response) {
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = false;
        });
    };
    return OptFormProfileComponent;
}(core$1.OptFormComponent));

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @Component({
//   selector: 'opt-form-change-password',
//   templateUrl: './form-change-password.component.html',
//   styleUrls: ['./form-change-password.component.scss']
// })
var OptFormChangePasswordComponent = /** @class */ (function (_super) {
    __extends$3(OptFormChangePasswordComponent, _super);
    function OptFormChangePasswordComponent(formBuilder, userService, router$$1) {
        var _this = _super.call(this, formBuilder) || this;
        _this.formBuilder = formBuilder;
        _this.userService = userService;
        _this.router = router$$1;
        _this.SERVER_MESSAGES = {
            400: 'The actual password is incorrect.',
            200: 'Your password was successfully changed.'
        };
        _this.formErrors = {
            actualPassword: '',
            password: '',
            repeatPassword: ''
        };
        _this.VALIDATION_MESSAGES = {
            actualPassword: {
                required: 'Actual password is required'
            },
            password: {
                required: 'Password is required',
                minlength: 'Password must be at least 8 characters long'
            },
            repeatPassword: {
                required: 'Repeat password is required',
                MatchPassword: 'Passwords must be equal'
            }
        };
        _this.PLACEHOLDERS = {
            actualPassword: 'Actual password',
            password: 'Password',
            repeatPassword: 'Re-enter password'
        };
        _this.LABELS = {
            actualPassword: 'Actual password',
            password: 'Password',
            repeatPassword: 'Re-enter Password'
        };
        _this.SUBMIT_LABEL = 'Update';
        _this.formBuilderGroupControlsConfig = {
            actualPassword: [
                null, [forms.Validators.required]
            ],
            password: [
                null, [forms.Validators.required, forms.Validators.minLength(8)]
            ],
            repeatPassword: [
                null, [forms.Validators.required]
            ]
        };
        _this.formBuilderGroupExtra = {
            validator: core$1.OptPasswordValidation.MatchPassword
        };
        return _this;
    }
    OptFormChangePasswordComponent.prototype.submit = function () {
        var self = this;
        var actualPassword = self.form.value.actualPassword;
        var password = self.form.value.password;
        var repeatPassword = self.form.value.repeatPassword;
        self.userService.changePassword(actualPassword, password, repeatPassword)
            .then(function (response) {
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = true;
        })
            .catch(function (response) {
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = false;
        });
    };
    return OptFormChangePasswordComponent;
}(core$1.OptFormComponent));

// @Component({
//   selector: 'opt-recover-password',
//   templateUrl: './recover-password.component.html',
//   styleUrls: ['./recover-password.component.scss']
// })
var OptRecoverPasswordComponent = /** @class */ (function () {
    function OptRecoverPasswordComponent(app, router$$1) {
        this.app = app;
        this.router = router$$1;
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

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @Component({
//   selector: 'opt-form-recover-password',
//   templateUrl: './form-recover-password.component.html',
//   styleUrls: ['./form-recover-password.component.scss']
// })
var OptFormRecoverPasswordComponent = /** @class */ (function (_super) {
    __extends$4(OptFormRecoverPasswordComponent, _super);
    function OptFormRecoverPasswordComponent(formBuilder, authService, router$$1, activatedRoute) {
        var _this = _super.call(this, formBuilder) || this;
        _this.formBuilder = formBuilder;
        _this.authService = authService;
        _this.router = router$$1;
        _this.activatedRoute = activatedRoute;
        _this.onSubmitted = new core.EventEmitter();
        _this.onSubmitError = new core.EventEmitter();
        _this.formErrors = {
            'password': '',
            'repeatPassword': ''
        };
        _this.VALIDATION_MESSAGES = {
            'password': {
                'required': 'Password is required',
                'minlength': 'Password must be at least 8 characters long'
            },
            'repeatPassword': {
                'required': 'Repeat password is required',
                'MatchPassword': 'Passwords must be equal'
            }
        };
        _this.SERVER_MESSAGES = {
            204: 'The password successfully changed.',
            404: 'The password change request is invalid.',
            401: 'The password change request was previously used.' // the token is used before
        };
        _this.PLACEHOLDERS = {
            'password': 'Nueva contraseña',
            'repeatPassword': 'Repetir contraseña'
        };
        _this.SUMBIT_LABEL = 'Update password';
        _this.formBuilderGroupControlsConfig = {
            'password': [
                null, [forms.Validators.required, forms.Validators.minLength(8)]
            ],
            'repeatPassword': [
                null, [forms.Validators.required]
            ]
        };
        _this.formBuilderGroupExtra = {
            validator: core$1.OptPasswordValidation.MatchPassword
        };
        return _this;
    }
    OptFormRecoverPasswordComponent.prototype.ngOnInit = function () {
        var self = this;
        // subscribe to router event
        this.activatedRoute.params.subscribe(function (params) {
            self.token = params['token'];
        });
        _super.prototype.buildForm.call(this);
    };
    OptFormRecoverPasswordComponent.prototype.goToLogin = function () {
        this.router.navigate(['/login']);
    };
    OptFormRecoverPasswordComponent.prototype.submit = function () {
        var self = this;
        var password = this.form.value.password;
        var passwordConfirmation = this.form.value.password;
        this.authService.resetPassword(this.token, password, passwordConfirmation)
            .then(function (response) {
            self.onSubmitted.emit();
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = true;
        })
            .catch(function (response) {
            self.onSubmitError.emit();
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = false;
        });
    };
    OptFormRecoverPasswordComponent.propDecorators = {
        'onSubmitted': [{ type: core.Output },],
        'onSubmitError': [{ type: core.Output },],
    };
    return OptFormRecoverPasswordComponent;
}(core$1.OptFormComponent));

// @Component({
//   selector: 'opt-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
var OptRegisterComponent = /** @class */ (function () {
    function OptRegisterComponent(app, router$$1) {
        this.app = app;
        this.router = router$$1;
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

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @Component({
//   selector: 'opt-form-register',
//   templateUrl: './form-register.component.html',
//   styleUrls: ['./form-register.component.scss']
// })
var OptFormRegisterComponent = /** @class */ (function (_super) {
    __extends$5(OptFormRegisterComponent, _super);
    function OptFormRegisterComponent(formBuilder, authService, router$$1) {
        var _this = _super.call(this, formBuilder) || this;
        _this.formBuilder = formBuilder;
        _this.authService = authService;
        _this.router = router$$1;
        _this.SERVER_MESSAGES = {
            401: 'Invalid user or password.'
        };
        _this.formErrors = {
            firstName: '',
            lastName: '',
            email: '',
            repeatEmail: '',
            password: ''
        };
        _this.VALIDATION_MESSAGES = {
            firstName: {
                required: 'First name is required'
            },
            lastName: {
                required: 'Last name is required'
            },
            email: {
                required: 'Email is required',
                email: 'Invalid email'
            },
            repeatEmail: {
                required: 'Confirm email is required',
                email: 'Invalid confirm email'
            },
            password: {
                required: 'Password is required',
                minlength: 'Password must be at least 8 characters long'
            }
        };
        _this.PLACEHOLDERS = {
            firstName: 'First name',
            lastName: 'Last name',
            email: 'Email address',
            repeatEmail: 'Re-enter email address',
            password: 'Password'
        };
        _this.LABELS = {
            name: 'Name',
            email: 'Email',
            repeatEmail: 'Re-enter Email',
            password: 'Password'
        };
        _this.SUBMIT_LABEL = 'Sign up';
        _this.formBuilderGroupControlsConfig = {
            firstName: [
                null, [forms.Validators.required]
            ],
            lastName: [
                null, [forms.Validators.required]
            ],
            email: [
                null, [forms.Validators.required, forms.Validators.email]
            ],
            repeatEmail: [
                null, [forms.Validators.required, forms.Validators.email]
            ],
            password: [
                null, [forms.Validators.required, forms.Validators.minLength(8)]
            ]
        };
        return _this;
    }
    OptFormRegisterComponent.prototype.submit = function () {
        var self = this;
        var user = new core$1.OptUser();
        user.setFullName(self.form.value.firstName, self.form.value.lastName);
        user.username = self.form.value.email;
        user.password = self.form.value.password;
        user.email = self.form.value.email;
        self.authService.register(user)
            .then(function () {
            self.router.navigate(['/']);
        })
            .catch(function (response) {
            self.serverMessage.message = self.SERVER_MESSAGES[response.statusCode];
            self.serverMessage.show = true;
            self.serverMessage.isStatusOk = false;
        });
    };
    return OptFormRegisterComponent;
}(core$1.OptFormComponent));

// @Component({
//   selector: 'opt-root',
//   templateUrl: './option-template.component.html'
// })
var OptionTemplateComponent = /** @class */ (function () {
    function OptionTemplateComponent(router$$1, route) {
        var _this = this;
        this.router = router$$1;
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
        router$$1.events.subscribe(function (e) {
            if (e instanceof router.NavigationStart) {
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

// User Login / Register
var routes = [
    { path: '', redirectTo: '/user/login', pathMatch: 'full' },
    { path: 'user/login', component: OptLoginComponent, data: { title: 'Login Page' } },
    { path: 'user/login-v2', component: OptLoginV2Component, data: { title: 'Login V2 Page' } },
    { path: 'user/register', component: OptRegisterComponent, data: { title: 'Register Page' } },
    { path: 'user/recover-pasword', component: OptRecoverPasswordComponent, data: { title: 'Recover Password Page' } },
    { path: 'user/forgot-password', component: OptForgotPasswordComponent, data: { title: 'Forgot Password Page' } },
    { path: 'user/profile', component: OptProfileComponent, data: { title: 'Profile Page' } }
];
var OptionTemplateRoutingModule = /** @class */ (function () {
    function OptionTemplateRoutingModule() {
    }
    OptionTemplateRoutingModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [router.RouterModule.forRoot(routes)],
                    exports: [router.RouterModule]
                },] },
    ];
    /** @nocollapse */
    OptionTemplateRoutingModule.ctorParameters = function () { return []; };
    return OptionTemplateRoutingModule;
}());

// Main Component
// import { OptionTemplateComponent } from './option-template.component'
// import { OptNotFoundComponent } from './not-found/not-found.component'
// import { OptCoverComponent } from './cover/cover.component';
// import { OptHeaderComponent } from './header/header.component';
// import { OptMegaMenuComponent } from './header/mega-menu/mega-menu.component';
// import { OptTopMenuComponent } from './top-menu/top-menu.component';
// import { OptSidebarComponent } from './sidebar/sidebar.component';
// import { OptSidebarTwoComponent } from './sidebar-two/sidebar-two.component';
// import { OptContentComponent } from './content/content.component';
// import { OptFooterComponent } from './footer/footer.component';
// import { OptThemePanelComponent } from './theme-panel/theme-panel.component';
// User
// import { OptLoginComponent } from './user/login/login.component';
// import { OptFormLoginComponent } from './user/login/form-login/form-login.component';
// import { OptLoginV2Component } from './user/login-v2/login-v2.component';
// import { OptRegisterComponent } from './user/register/register.component';
// import { OptFormRegisterComponent } from './user/register/form-register/form-register.component';
// import { OptRecoverPasswordComponent } from './user/recover-password/recover-password.component';
// import { OptFormRecoverPasswordComponent } from './user/recover-password/form-recover-password/form-recover-password.component';
// import { OptForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
// import { OptFormForgotPasswordComponent } from './user/forgot-password/form-forgot-password/form-forgot-password.component';
// import { OptProfileComponent } from './user/profile/profile.component';
// import { OptFormProfileComponent } from './user/profile/form-profile/form-profile.component';
// import { OptFormChangePasswordComponent } from './user/profile/form-change-password/form-change-password.component';
var OptionTemplateModule = /** @class */ (function () {
    function OptionTemplateModule() {
    }
    OptionTemplateModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        platformBrowser.BrowserModule,
                        http.HttpModule,
                        common.CommonModule,
                        router.RouterModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        core$1.OptionCoreModule.forRoot(''),
                        OptionTemplateRoutingModule
                    ],
                    declarations: [],
                    providers: [
                        core$1.OptAuthService,
                        core$1.OptUserService
                    ],
                },] },
    ];
    /** @nocollapse */
    OptionTemplateModule.ctorParameters = function () { return []; };
    return OptionTemplateModule;
}());

// Components

exports.OptContentComponent = OptContentComponent;
exports.OptCoverComponent = OptCoverComponent;
exports.OptFooterComponent = OptFooterComponent;
exports.OptHeaderComponent = OptHeaderComponent;
exports.OptMegaMenuComponent = OptMegaMenuComponent;
exports.OptNotFoundComponent = OptNotFoundComponent;
exports.OptSidebarComponent = OptSidebarComponent;
exports.OptSidebarTwoComponent = OptSidebarTwoComponent;
exports.OptThemePanelComponent = OptThemePanelComponent;
exports.OptTopMenuComponent = OptTopMenuComponent;
exports.OptForgotPasswordComponent = OptForgotPasswordComponent;
exports.OptFormForgotPasswordComponent = OptFormForgotPasswordComponent;
exports.OptLoginComponent = OptLoginComponent;
exports.OptFormLoginComponent = OptFormLoginComponent;
exports.OptLoginV2Component = OptLoginV2Component;
exports.OptProfileComponent = OptProfileComponent;
exports.OptFormProfileComponent = OptFormProfileComponent;
exports.OptFormChangePasswordComponent = OptFormChangePasswordComponent;
exports.OptRecoverPasswordComponent = OptRecoverPasswordComponent;
exports.OptFormRecoverPasswordComponent = OptFormRecoverPasswordComponent;
exports.OptRegisterComponent = OptRegisterComponent;
exports.OptFormRegisterComponent = OptFormRegisterComponent;
exports.OptionTemplateComponent = OptionTemplateComponent;
exports.OptionTemplateModule = OptionTemplateModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
