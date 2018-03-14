import { AfterViewInit, ElementRef } from '@angular/core';
import { OptLazyScriptService } from '@option/core';
export declare class SelectPickerDirective implements AfterViewInit {
    private lazyScriptService;
    private el;
    options: any;
    constructor(lazyScriptService: OptLazyScriptService, el: ElementRef);
    ngAfterViewInit(): void;
}
