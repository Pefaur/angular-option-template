import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptAuthService, OptionCoreModule, OptUserService } from '@option/core';

// Constant
import { LazyScriptStore } from './shared/lazy-scripts-store';

// Directives
import { ColorPickerDirective } from './directives/color-picker.directive';
import { DatePickerDirective } from './directives/date-picker.directive';
import { ScrollDirective } from './directives/scroll.directive';
import { Select2Directive } from './directives/select2.directive';
import { SelectPickerDirective } from './directives/select-picker.directive';
import { SlimscrollrDirective } from './directives/slimscroll.directive';

const sharedDirectives = [
  ColorPickerDirective,
  DatePickerDirective,
  ScrollDirective,
  Select2Directive,
  SelectPickerDirective,
  SlimscrollrDirective
];

@NgModule({
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
})
export class OptionTemplateModule {
}
