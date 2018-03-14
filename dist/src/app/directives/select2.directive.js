import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { OptLazyScriptService } from '@option/core';
var Select2Directive = /** @class */ (function () {
    function Select2Directive(lazyScriptService, el) {
        this.lazyScriptService = lazyScriptService;
        this.el = el;
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
    }
    Select2Directive.prototype.ngAfterViewInit = function () {
        var self = this;
        self.options = $.extend({ language: 'es' }, self.options);
        self.lazyScriptService.load('select2')
            .then(function (data) {
            self.lazyScriptService.loadScript('select2-es')
                .then(function () {
                var $select2Element = $(self.el.nativeElement).select2(self.options);
                $select2Element.on('select2:select', function (e) {
                    self.onSelect.emit($select2Element.val());
                });
                $select2Element.on('select2:unselect', function () {
                    self.onSelect.emit();
                });
            })
                .catch(function (error) {
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    Select2Directive.decorators = [
        { type: Directive, args: [{
                    selector: '[optSelect2]'
                },] },
    ];
    /** @nocollapse */
    Select2Directive.ctorParameters = function () { return [
        { type: OptLazyScriptService, },
        { type: ElementRef, },
    ]; };
    Select2Directive.propDecorators = {
        'options': [{ type: Input, args: ['optSelect2',] },],
        'onSelect': [{ type: Output },],
        'onUnselect': [{ type: Output },],
    };
    return Select2Directive;
}());
export { Select2Directive };
//# sourceMappingURL=select2.directive.js.map