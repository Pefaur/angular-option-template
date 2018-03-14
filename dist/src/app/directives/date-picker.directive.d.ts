import { EventEmitter, AfterViewInit, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import { OptLazyScriptService } from '@option/core';
export declare class DatePickerDirective implements AfterViewInit, OnChanges {
    private lazyScriptService;
    private el;
    options: any;
    isCollapsed: boolean;
    setDate: Date;
    availableDates: Date[];
    onChange: EventEmitter<any>;
    onChangeMonth: EventEmitter<any>;
    onLoad: EventEmitter<any>;
    $element: any;
    actualDate: Date;
    lastClickedDate: Date;
    constructor(lazyScriptService: OptLazyScriptService, el: ElementRef);
    loadCurrentMonthDisabledDates(currentDate?: Date): void;
    ngOnChanges(changes: SimpleChanges): void;
    loadTemplateModification(): void;
    getDefaultOptions(): object;
    collapse(): void;
    expand(): void;
    setCollapse(collapse: boolean): void;
    toggleCollapse(): void;
    renderActiveDate(): void;
    ngAfterViewInit(): void;
}
