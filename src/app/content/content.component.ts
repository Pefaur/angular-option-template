import { Component, OnInit, Input } from '@angular/core';

// @Component({
//   selector: 'opt-content',
//   templateUrl: './content.component.html'
// })
export class OptContentComponent implements OnInit {
  @Input() page_content_full_width: boolean;
  @Input() page_content_inverse_mode: boolean;

  ngOnInit() {

  }
}
