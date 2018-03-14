import {
  Directive, Input, Output, EventEmitter, AfterViewInit, ElementRef, SimpleChanges,
  SimpleChange, OnChanges
} from '@angular/core';
import { OptLazyScriptService } from '@option/core';

declare let $: any;
declare let moment: any;

@Directive({
  selector: '[optDatePicker]'
})
export class DatePickerDirective implements AfterViewInit, OnChanges {
  @Input('optDatePicker') options: any;
  @Input() isCollapsed: boolean;
  @Input() setDate: Date;
  @Input() availableDates: Date[];
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onChangeMonth: EventEmitter<any> = new EventEmitter();
  @Output() onLoad: EventEmitter<any> = new EventEmitter();

  $element: any;
  actualDate: Date;
  lastClickedDate: Date;

  constructor(private lazyScriptService: OptLazyScriptService, private el: ElementRef) {
  }

  loadCurrentMonthDisabledDates(currentDate?: Date) {
    if (!this.$element) {
      return;
    }
    if (!this.availableDates || (this.availableDates && this.availableDates.length === 0)) {
      return;
    }

    if (!this.actualDate && !currentDate) {
      return;
    }
    let momCurrentDate = moment(this.actualDate);
    if (currentDate) {
      momCurrentDate = moment(currentDate);
    }

    const availableDatesMap: any = {};
    const dateFormat = 'YYYY-MM-DD';
    // available dates order by date
    this.availableDates.map(function (dateAvailable) {
      availableDatesMap[moment(dateAvailable).format(dateFormat)] = dateAvailable;
    });

    let startDate = moment(momCurrentDate.startOf('month').format(dateFormat), dateFormat);
    let endDate = moment(momCurrentDate.endOf('month').add(1, 'days').format(dateFormat), dateFormat);

    const additionalMonthDates = 20;
    startDate = startDate.subtract(additionalMonthDates, 'days');
    endDate = endDate.add(additionalMonthDates, 'days');

    // disable not available month dates
    const disabledDates = [];
    const momentIterator = startDate.clone();
    while (endDate.diff(momentIterator, 'days') > 0) {
      if (!availableDatesMap[momentIterator.format('YYYY-MM-DD')]) {
        disabledDates.push(momentIterator.toDate());
      }
      momentIterator.add(1, 'days');
    }

    this.$element.datepicker('setDatesDisabled', disabledDates);
    this.$element.datepicker('setDate', this.actualDate);
    this.renderActiveDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    const availableDates: SimpleChange = changes.availableDates;
    const isCollapsed: SimpleChange = changes.isCollapsed;
    const setDate: SimpleChange = changes.setDate;
    if (availableDates && (availableDates.previousValue !== availableDates.currentValue)) {
      this.loadCurrentMonthDisabledDates(this.actualDate);
    }
    if (isCollapsed && (isCollapsed.previousValue !== isCollapsed.currentValue)) {
      this.setCollapse(isCollapsed.currentValue);
    }
    if (setDate) {
      const previousValue = setDate.previousValue ? setDate.previousValue.getTime() : setDate.previousValue;
      const currentValue = setDate.currentValue ? setDate.currentValue.getTime() : setDate.currentValue;
      if (previousValue !== currentValue && this.$element) {
        this.$element.datepicker('setDate', setDate.currentValue);
        this.lastClickedDate = setDate.currentValue;
        this.loadCurrentMonthDisabledDates();
      }
    }
  }

  loadTemplateModification() {
    const $collapseContainer = $('<tr>' +
      '<td colspan="2"></td>' +
      '<td colspan="3" class="collapse-button"></td>' +
      '<td colspan="2"></td>' +
      '</tr>');

    const $collapseToggle = $('<a class="collapse-toggle link"></a>')
      .click(() => this.toggleCollapse());

    $collapseContainer.find('.collapse-button').append($collapseToggle);
    this.$element.find('tfoot').append($collapseContainer)
  }

  getDefaultOptions(): object {
    return {
      format: 'dd/mm/yyyy',
      language: 'es',
      templates: {
        leftArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        rightArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      },
      footTemplate: ''
    };
  }

  collapse(): void {
    const $tbody = this.$element.find('tbody');
    const $activeDay = $tbody.find('.day.active');
    $tbody.find('tr').hide();
    const $activeRow = $activeDay.closest('tr');
    $activeRow.show();
  }

  expand() {
    const $tbody = this.$element.find('tbody');
    $tbody.find('tr').show();
  }

  setCollapse(collapse: boolean) {
    if (!this.$element) {
      return;
    }
    collapse ? this.collapse() : this.expand();
  }

  toggleCollapse() {
    console.log('toggle collapse');
    this.isCollapsed = !this.isCollapsed;
    this.setCollapse(this.isCollapsed);
  }

  renderActiveDate() {
    // clear active elements
    this.$element.find('.active').removeClass('active');

    if (this.lastClickedDate) {
      // add active to last clicked target
      const momLastClickedDate = moment(this.lastClickedDate).clone();
      const lastClickedDate = momLastClickedDate.format('D');
      const lastClickedMonth = momLastClickedDate.format('MM');
      const lastClickedYear = momLastClickedDate.format('YYYY');

      const momActualDate = moment(this.actualDate).clone();
      const actualYear = momActualDate.format('YYYY');

      if (actualYear !== lastClickedYear) {
        return;
      }

      let filterClass = '.day';
      if (lastClickedMonth !== momActualDate.format('MM')) {
        if (lastClickedMonth === momActualDate.clone().add(1, 'month').format('MM')) {
          filterClass += '.new';
        } else if (lastClickedMonth === momActualDate.clone().subtract(1, 'month').format('MM')) {
          filterClass += '.old';
        } else {
          return;
        }
      }
      const filterDays = this.$element.find(filterClass);
      filterDays.map((key: any, filterDay: any) => {
        const $filterDay = $(filterDay);
        if ($filterDay.html() === lastClickedDate && !$filterDay.hasClass('old') && !$filterDay.hasClass('new')) {
          // active to lastClickedDate
          $filterDay.addClass('active');
        }
      });
    }
  }

  ngAfterViewInit() {
    const self = this;
    if (!self.availableDates) {
      self.availableDates = [];
    }
    self.lazyScriptService.load('datepicker')
      .then(data => {
        self.lazyScriptService.loadScript('datepicker-es')
          .then(() => {
            self.options = $.extend(self.getDefaultOptions(), self.options);
            self.$element = $(self.el.nativeElement);
            const $datepicker = self.$element.datepicker(self.options);
            $datepicker.on('changeDate', function (ev: any) {
              const hasDistintDates = self.actualDate && self.actualDate.getTime() !== ev.date.getTime();
              self.actualDate = ev.date;
              // self.onChange.emit(ev.date);
              if (hasDistintDates) {
                self.loadCurrentMonthDisabledDates(ev.date);
              }
            });
            $datepicker.on('changeMonth', function (ev: any) {
              self.actualDate = ev.date;
              self.onChangeMonth.emit(ev.date);
              self.loadCurrentMonthDisabledDates(ev.date);
            });

            $datepicker.find('.datepicker').on('click', 'td.day', function (ev: any) {
              const $currentTarget = $(ev.currentTarget);
              if ($currentTarget.hasClass('disabled-date')) {
                return;
              }

              let actualDate = moment(self.actualDate).clone();
              const isOldMonthDate = $currentTarget.hasClass('old');
              const isNextMonthDate = $currentTarget.hasClass('new');
              if (isOldMonthDate) {
                actualDate = actualDate.subtract(1, 'month');
              } else if (isNextMonthDate) {
                actualDate = actualDate.add(1, 'month');
              }
              let currentDate = $currentTarget.html();
              if (currentDate.length === 1) {
                currentDate = '0' + currentDate;
              }
              const dateFormat = 'YYYY-MM-DD';
              ev.date = moment(actualDate.format('YYYY-MM-[' + currentDate + ']'), dateFormat).toDate();
              self.lastClickedDate = ev.date;

              const hasDistintDates = self.actualDate && self.actualDate.getTime() !== ev.date.getTime();
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
            } else {
              self.loadCurrentMonthDisabledDates();
            }
            self.loadCurrentMonthDisabledDates();
            self.loadTemplateModification();
            self.setCollapse(self.isCollapsed);

            self.onLoad.emit();
          })
          .catch((error: any) => {
            console.log(error)
          });
      })
      .catch(error => {
        console.log(error)
      });
  }
}
