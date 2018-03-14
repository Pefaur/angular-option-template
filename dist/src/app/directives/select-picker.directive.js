import { Directive, ElementRef, Input } from '@angular/core';
import { OptLazyScriptService } from '@option/core';
var SelectPickerDirective = /** @class */ (function () {
    function SelectPickerDirective(lazyScriptService, el) {
        this.lazyScriptService = lazyScriptService;
        this.el = el;
    }
    SelectPickerDirective.prototype.ngAfterViewInit = function () {
        var self = this;
        self.options = $.extend({}, self.options);
        self.lazyScriptService.load('selectpicker')
            .then(function (data) {
            $(self.el.nativeElement).selectpicker(self.options);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    SelectPickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[optSelectPicker]'
                },] },
    ];
    /** @nocollapse */
    SelectPickerDirective.ctorParameters = function () { return [
        { type: OptLazyScriptService, },
        { type: ElementRef, },
    ]; };
    SelectPickerDirective.propDecorators = {
        'options': [{ type: Input },],
    };
    return SelectPickerDirective;
}());
export { SelectPickerDirective };
//# sourceMappingURL=select-picker.directive.js.map