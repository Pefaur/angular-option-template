import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OptAuthService, OptionCoreModule, OptUserService } from '@option/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Main Component
import { OptionTemplateRoutingModule } from './option-template-routing.module';
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
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        HttpModule,
                        CommonModule,
                        RouterModule,
                        FormsModule,
                        ReactiveFormsModule,
                        OptionCoreModule.forRoot(''),
                        OptionTemplateRoutingModule
                    ],
                    declarations: [],
                    providers: [
                        OptAuthService,
                        OptUserService
                    ],
                },] },
    ];
    /** @nocollapse */
    OptionTemplateModule.ctorParameters = function () { return []; };
    return OptionTemplateModule;
}());
export { OptionTemplateModule };
//# sourceMappingURL=option-template.module.js.map