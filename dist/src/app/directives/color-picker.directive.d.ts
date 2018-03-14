import { EventEmitter, AfterViewInit } from '@angular/core';
import { OptLazyScriptService } from '@option/core';
export declare class ColorPickerDirective implements AfterViewInit {
    private lazyScriptService;
    id: string;
    onChangeColor: EventEmitter<any>;
    constructor(lazyScriptService: OptLazyScriptService);
    ngAfterViewInit(): void;
}
