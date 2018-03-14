import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';
import { OptLazyScriptService } from '@option/core';

declare let $: any;

@Directive({
  selector: '[optSlimscroll]'
})
export class SlimscrollrDirective implements AfterViewInit {
  @Input() height: string;

  constructor(private lazyScriptService: OptLazyScriptService, private el: ElementRef) {
  }

  ngAfterViewInit() {
    const self = this;
    self.lazyScriptService.load('slimscroll')
      .then(data => {
        self.generateSlimScroll(self.el.nativeElement);
      })
      .catch(error => {
        console.log(error)
      });
  }

  generateSlimScroll(element: any) {
    if ($(element).attr('data-init')) {
      return;
    }
    let dataHeight = this.height;
    dataHeight = (!dataHeight) ? $(element).height() : dataHeight;

    const scrollBarOption = {
      height: dataHeight,
      alwaysVisible: false,
      color: 'rgba(0,0,0,0)'
    };
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $(element).css('height', dataHeight);
      $(element).css('overflow-x', 'scroll');
    } else {
      $(element).slimScroll(scrollBarOption);
    }
    $(element).attr('data-init', true);
  }
}
