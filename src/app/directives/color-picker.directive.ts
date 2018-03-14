import { Directive, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { OptLazyScriptService } from '@option/core';

declare let $: any;

@Directive({
  selector: '[optColorPicker]'
})
export class ColorPickerDirective implements AfterViewInit {
  @Input() id: string;
  @Output() onChangeColor: EventEmitter<any> = new EventEmitter();

  constructor(private lazyScriptService: OptLazyScriptService) {
  }

  ngAfterViewInit() {
    const self = this;
    self.lazyScriptService.load('colorpicker')
      .then((data: any) => {
        console.log('script loaded ', data);
        $(document.getElementById(self.id)).colorpicker({format: 'hex'}).on('changeColor', function (e: any) {
          self.onChangeColor.emit(this.value)
        });
      })
      .catch((error: any) => {
        console.log(error)
      });
  }
}
