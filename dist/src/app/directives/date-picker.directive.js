import { Directive, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { OptLazyScriptService } from '@option/core';
var DatePickerDirective = /** @class */ (function () {
    function DatePickerDirective(lazyScriptService, el) {
        this.lazyScriptService = lazyScriptService;
        this.el = el;
        this.onChange = new EventEmitter();
        this.onChangeMonth = new EventEmitter();
        this.onLoad = new EventEmitter();
    }
    DatePickerDirective.prototype.loadCurrentMonthDisabledDates = function (currentDate) {
        if (!this.$element) {
            return;
        }
        if (!this.availableDates || (this.availableDates && this.availableDates.length === 0)) {
            return;
        }
        if (!this.actualDate && !currentDate) {
            return;
        }
        var momCurrentDate = moment(this.actualDate);
        if (currentDate) {
            momCurrentDate = moment(currentDate);
        }
        var availableDatesMap = {};
        var dateFormat = 'YYYY-MM-DD';
        // available dates order by date
        this.availableDates.map(function (dateAvailable) {
            availableDatesMap[moment(dateAvailable).format(dateFormat)] = dateAvailable;
        });
        var startDate = moment(momCurrentDate.startOf('month').format(dateFormat), dateFormat);
        var endDate = moment(momCurrentDate.endOf('month').add(1, 'days').format(dateFormat), dateFormat);
        var additionalMonthDates = 20;
        startDate = startDate.subtract(additionalMonthDates, 'days');
        endDate = endDate.add(additionalMonthDates, 'days');
        // disable not available month dates
        var disabledDates = [];
        var momentIterator = startDate.clone();
        while (endDate.diff(momentIterator, 'days') > 0) {
            if (!availableDatesMap[momentIterator.format('YYYY-MM-DD')]) {
                disabledDates.push(momentIterator.toDate());
            }
            momentIterator.add(1, 'days');
        }
        this.$element.datepicker('setDatesDisabled', disabledDates);
        this.$element.datepicker('setDate', this.actualDate);
        this.renderActiveDate();
    };
    DatePickerDirective.prototype.ngOnChanges = function (changes) {
        var availableDates = changes.availableDates;
        var isCollapsed = changes.isCollapsed;
        var setDate = changes.setDate;
        if (availableDates && (availableDates.previousValue !== availableDates.currentValue)) {
            this.loadCurrentMonthDisabledDates(this.actualDate);
        }
        if (isCollapsed && (isCollapsed.previousValue !== isCollapsed.currentValue)) {
            this.setCollapse(isCollapsed.currentValue);
        }
        if (setDate) {
            var previousValue = setDate.previousValue ? setDate.previousValue.getTime() : setDate.previousValue;
            var currentValue = setDate.currentValue ? setDate.currentValue.getTime() : setDate.currentValue;
            if (previousValue !== currentValue && this.$element) {
                this.$element.datepicker('setDate', setDate.currentValue);
                this.lastClickedDate = setDate.currentValue;
                this.loadCurrentMonthDisabledDates();
            }
        }
    };
    DatePickerDirective.prototype.loadTemplateModification = function () {
        var _this = this;
        var $collapseContainer = $('<tr>' +
            '<td colspan="2"></td>' +
            '<td colspan="3" class="collapse-button"></td>' +
            '<td colspan="2"></td>' +
            '</tr>');
        var $collapseToggle = $('<a class="collapse-toggle link"></a>')
            .click(function () { return _this.toggleCollapse(); });
        $collapseContainer.find('.collapse-button').append($collapseToggle);
        this.$element.find('tfoot').append($collapseContainer);
    };
    DatePickerDirective.prototype.getDefaultOptions = function () {
        return {
            format: 'dd/mm/yyyy',
            language: 'es',
            templates: {
                leftArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                rightArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            },
            footTemplate: ''
        };
    };
    DatePickerDirective.prototype.collapse = function () {
        var $tbody = this.$element.find('tbody');
        var $activeDay = $tbody.find('.day.active');
        $tbody.find('tr').hide();
        var $activeRow = $activeDay.closest('tr');
        $activeRow.show();
    };
    DatePickerDirective.prototype.expand = function () {
        var $tbody = this.$element.find('tbody');
        $tbody.find('tr').show();
    };
    DatePickerDirective.prototype.setCollapse = function (collapse) {
        if (!this.$element) {
            return;
        }
        collapse ? this.collapse() : this.expand();
    };
    DatePickerDirective.prototype.toggleCollapse = function () {
        console.log('toggle collapse');
        this.isCollapsed = !this.isCollapsed;
        this.setCollapse(this.isCollapsed);
    };
    DatePickerDirective.prototype.renderActiveDate = function () {
        // clear active elements
        this.$element.find('.active').removeClass('active');
        if (this.lastClickedDate) {
            // add active to last clicked target
            var momLastClickedDate = moment(this.lastClickedDate).clone();
            var lastClickedDate_1 = momLastClickedDate.format('D');
            var lastClickedMonth = momLastClickedDate.format('MM');
            var lastClickedYear = momLastClickedDate.format('YYYY');
            var momActualDate = moment(this.actualDate).clone();
            var actualYear = momActualDate.format('YYYY');
            if (actualYear !== lastClickedYear) {
                return;
            }
            var filterClass = '.day';
            if (lastClickedMonth !== momActualDate.format('MM')) {
                if (lastClickedMonth === momActualDate.clone().add(1, 'month').format('MM')) {
                    filterClass += '.new';
                }
                else if (lastClickedMonth === momActualDate.clone().subtract(1, 'month').format('MM')) {
                    filterClass += '.old';
                }
                else {
                    return;
                }
            }
            var filterDays = this.$element.find(filterClass);
            filterDays.map(function (key, filterDay) {
                var $filterDay = $(filterDay);
                if ($filterDay.html() === lastClickedDate_1 && !$filterDay.hasClass('old') && !$filterDay.hasClass('new')) {
                    // active to lastClickedDate
                    $filterDay.addClass('active');
                }
            });
        }
    };
    DatePickerDirective.prototype.ngAfterViewInit = function () {
        var self = this;
        if (!self.availableDates) {
            self.availableDates = [];
        }
        self.lazyScriptService.load('datepicker')
            .then(function (data) {
            self.lazyScriptService.loadScript('datepicker-es')
                .then(function () {
                self.options = $.extend(self.getDefaultOptions(), self.options);
                self.$element = $(self.el.nativeElement);
                var $datepicker = self.$element.datepicker(self.options);
                $datepicker.on('changeDate', function (ev) {
                    var hasDistintDates = self.actualDate && self.actualDate.getTime() !== ev.date.getTime();
                    self.actualDate = ev.date;
                    // self.onChange.emit(ev.date);
                    if (hasDistintDates) {
                        self.loadCurrentMonthDisabledDates(ev.date);
                    }
                });
                $datepicker.on('changeMonth', function (ev) {
                    self.actualDate = ev.date;
                    self.onChangeMonth.emit(ev.date);
                    self.loadCurrentMonthDisabledDates(ev.date);
                });
                $datepicker.find('.datepicker').on('click', 'td.day', function (ev) {
                    var $currentTarget = $(ev.currentTarget);
                    if ($currentTarget.hasClass('disabled-date')) {
                        return;
                    }
                    var actualDate = moment(self.actualDate).clone();
                    var isOldMonthDate = $currentTarget.hasClass('old');
                    var isNextMonthDate = $currentTarget.hasClass('new');
                    if (isOldMonthDate) {
                        actualDate = actualDate.subtract(1, 'month');
                    }
                    else if (isNextMonthDate) {
                        actualDate = actualDate.add(1, 'month');
                    }
                    var currentDate = $currentTarget.html();
                    if (currentDate.length === 1) {
                        currentDate = '0' + currentDate;
                    }
                    var dateFormat = 'YYYY-MM-DD';
                    ev.date = moment(actualDate.format('YYYY-MM-[' + currentDate + ']'), dateFormat).toDate();
                    self.lastClickedDate = ev.date;
                    var hasDistintDates = self.actualDate && self.actualDate.getTime() !== ev.date.getTime();
                    self.actualDate = ev.date;
                    self.onChange.emit(ev.date);
                    if (hasDistintDates) {
                        self.loadCurrentMonthDisabledDates(ev.date);
                    }
                });
                self.actualDate = moment().startOf('day').toDate();
                if (self.setDate) {
                    self.$element.datepicker('setDate', self.setDate);
                    self.lastClickedDate = self.setDate;
                }
                else {
                    self.loadCurrentMonthDisabledDates();
                }
                self.loadCurrentMonthDisabledDates();
                self.loadTemplateModification();
                self.setCollapse(self.isCollapsed);
                self.onLoad.emit();
            })
                .catch(function (error) {
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    DatePickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[optDatePicker]'
                },] },
    ];
    /** @nocollapse */
    DatePickerDirective.ctorParameters = function () { return [
        { type: OptLazyScriptService, },
        { type: ElementRef, },
    ]; };
    DatePickerDirective.propDecorators = {
        'options': [{ type: Input, args: ['optDatePicker',] },],
        'isCollapsed': [{ type: Input },],
        'setDate': [{ type: Input },],
        'availableDates': [{ type: Input },],
        'onChange': [{ type: Output },],
        'onChangeMonth': [{ type: Output },],
        'onLoad': [{ type: Output },],
    };
    return DatePickerDirective;
}());
export { DatePickerDirective };
//# sourceMappingURL=date-picker.directive.js.map