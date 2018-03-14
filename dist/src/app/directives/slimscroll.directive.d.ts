import { AfterViewInit, ElementRef } from '@angular/core';
import { OptLazyScriptService } from '@option/core';
export declare class SlimscrollrDirective implements AfterViewInit {
    private lazyScriptService;
    private el;
    height: string;
    constructor(lazyScriptService: OptLazyScriptService, el: ElementRef);
    ngAfterViewInit(): void;
    generateSlimScroll(element: any): void;
}
