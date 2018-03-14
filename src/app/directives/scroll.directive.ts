import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

declare let $: any;

@Directive({
  selector: '[optScroll]'
})
export class ScrollDirective implements OnChanges {

  @Input() top: number;
  @Input() left: number;

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: any) {
    const $el = $(this.el.nativeElement);
    $el.children().css({
      'marginTop': (this.top * -1),
      'marginLeft': (this.left * -1),
    });
  }
}
