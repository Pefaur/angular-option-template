import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptionCoreModule, OptUserService } from '@option/core';
// Constant
import { LazyScriptStore } from './shared/lazy-scripts-store';
// Directives
import { ColorPickerDirective } from './directives/color-picker.directive';
import { DatePickerDirective } from './directives/date-picker.directive';
import { ScrollDirective } from './directives/scroll.directive';
import { Select2Directive } from './directives/select2.directive';
import { SelectPickerDirective } from './directives/select-picker.directive';
import { SlimscrollrDirective } from './directives/slimscroll.directive';
var sharedDirectives = [
    ColorPickerDirective,
    DatePickerDirective,
    ScrollDirective,
    Select2Directive,
    SelectPickerDirective,
    SlimscrollrDirective
];
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
                        OptionCoreModule.forRoot({
                            apiUrl: '',
                            lazyScriptsStore: LazyScriptStore
                        })
                    ],
                    declarations: sharedDirectives,
                    exports: sharedDirectives,
                    providers: [OptUserService]
                },] },
    ];
    /** @nocollapse */
    OptionTemplateModule.ctorParameters = function () { return []; };
    return OptionTemplateModule;
}());
export { OptionTemplateModule };
//# sourceMappingURL=option-template.module.js.map