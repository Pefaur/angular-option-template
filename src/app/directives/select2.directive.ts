import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { OptLazyScriptService } from '@option/core';

declare let $: any;
declare let jQuery: any;

@Directive({
  selector: '[optSelect2]'
})
export class Select2Directive implements AfterViewInit {

  @Input('optSelect2') options: any;
  @Output() onSelect = new EventEmitter();
  @Output() onUnselect = new EventEmitter();

  constructor(private lazyScriptService: OptLazyScriptService, private el: ElementRef) {
  }

  ngAfterViewInit() {
    const self = this;

    self.options = $.extend({language: 'es'}, self.options);

    self.lazyScriptService.load('select2')
      .then(data => {
        self.lazyScriptService.loadScript('select2-es')
          .then(() => {
            const $select2Element = $(self.el.nativeElement).select2(self.options);
            $select2Element.on('select2:select', function (e: any) {
              self.onSelect.emit($select2Element.val());
            });
            $select2Element.on('select2:unselect', function () {
              self.onSelect.emit();
            });
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
