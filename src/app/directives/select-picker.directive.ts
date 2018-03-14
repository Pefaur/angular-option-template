import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { OptLazyScriptService } from '@option/core';

declare let $: any;

@Directive({
  selector: '[optSelectPicker]'
})
export class SelectPickerDirective implements AfterViewInit {

  @Input() options: any;

  constructor(private lazyScriptService: OptLazyScriptService, private el: ElementRef) {
  }

  ngAfterViewInit() {
    const self = this;

    self.options = $.extend({}, self.options);

    self.lazyScriptService.load('selectpicker')
      .then(data => {
        $(self.el.nativeElement).selectpicker(self.options);
      })
      .catch(error => {
        console.log(error)
      });
  }
}
