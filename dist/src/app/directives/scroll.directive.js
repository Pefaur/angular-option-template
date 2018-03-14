import { Directive, ElementRef, Input } from '@angular/core';
var ScrollDirective = /** @class */ (function () {
    function ScrollDirective(el) {
        this.el = el;
    }
    ScrollDirective.prototype.ngOnChanges = function (changes) {
        var $el = $(this.el.nativeElement);
        $el.children().css({
            'marginTop': (this.top * -1),
            'marginLeft': (this.left * -1),
        });
    };
    ScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[optScroll]'
                },] },
    ];
    /** @nocollapse */
    ScrollDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ScrollDirective.propDecorators = {
        'top': [{ type: Input },],
        'left': [{ type: Input },],
    };
    return ScrollDirective;
}());
export { ScrollDirective };
//# sourceMappingURL=scroll.directive.js.map