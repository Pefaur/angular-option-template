import { Directive, Input, ElementRef } from '@angular/core';
import { OptLazyScriptService } from '@option/core';
var SlimscrollrDirective = /** @class */ (function () {
    function SlimscrollrDirective(lazyScriptService, el) {
        this.lazyScriptService = lazyScriptService;
        this.el = el;
    }
    SlimscrollrDirective.prototype.ngAfterViewInit = function () {
        var self = this;
        self.lazyScriptService.load('slimscroll')
            .then(function (data) {
            self.generateSlimScroll(self.el.nativeElement);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    SlimscrollrDirective.prototype.generateSlimScroll = function (element) {
        if ($(element).attr('data-init')) {
            return;
        }
        var dataHeight = this.height;
        dataHeight = (!dataHeight) ? $(element).height() : dataHeight;
        var scrollBarOption = {
            height: dataHeight,
            alwaysVisible: false,
            color: 'rgba(0,0,0,0)'
        };
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $(element).css('height', dataHeight);
            $(element).css('overflow-x', 'scroll');
        }
        else {
            $(element).slimScroll(scrollBarOption);
        }
        $(element).attr('data-init', true);
    };
    SlimscrollrDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[optSlimscroll]'
                },] },
    ];
    /** @nocollapse */
    SlimscrollrDirective.ctorParameters = function () { return [
        { type: OptLazyScriptService, },
        { type: ElementRef, },
    ]; };
    SlimscrollrDirective.propDecorators = {
        'height': [{ type: Input },],
    };
    return SlimscrollrDirective;
}());
export { SlimscrollrDirective };
//# sourceMappingURL=slimscroll.directive.js.map