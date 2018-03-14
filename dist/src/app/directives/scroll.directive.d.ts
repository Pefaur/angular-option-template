import { ElementRef, OnChanges } from '@angular/core';
export declare class ScrollDirective implements OnChanges {
    private el;
    top: number;
    left: number;
    constructor(el: ElementRef);
    ngOnChanges(changes: any): void;
}
