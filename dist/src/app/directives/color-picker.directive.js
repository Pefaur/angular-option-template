import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { OptLazyScriptService } from '@option/core';
var ColorPickerDirective = /** @class */ (function () {
    function ColorPickerDirective(lazyScriptService) {
        this.lazyScriptService = lazyScriptService;
        this.onChangeColor = new EventEmitter();
    }
    ColorPickerDirective.prototype.ngAfterViewInit = function () {
        var self = this;
        self.lazyScriptService.load('colorpicker')
            .then(function (data) {
            console.log('script loaded ', data);
            $(document.getElementById(self.id)).colorpicker({ format: 'hex' }).on('changeColor', function (e) {
                self.onChangeColor.emit(this.value);
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ColorPickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[optColorPicker]'
                },] },
    ];
    /** @nocollapse */
    ColorPickerDirective.ctorParameters = function () { return [
        { type: OptLazyScriptService, },
    ]; };
    ColorPickerDirective.propDecorators = {
        'id': [{ type: Input },],
        'onChangeColor': [{ type: Output },],
    };
    return ColorPickerDirective;
}());
export { ColorPickerDirective };
//# sourceMappingURL=color-picker.directive.js.map