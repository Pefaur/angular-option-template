import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { OptLazyScriptService } from '@option/core';
export declare class Select2Directive implements AfterViewInit {
    private lazyScriptService;
    private el;
    options: any;
    onSelect: EventEmitter<{}>;
    onUnselect: EventEmitter<{}>;
    constructor(lazyScriptService: OptLazyScriptService, el: ElementRef);
    ngAfterViewInit(): void;
}
