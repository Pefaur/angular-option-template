import { Component, OnInit, Input } from '@angular/core';

// @Component({
//   selector: 'opt-header',
//   templateUrl: './header.component.html'
// })
export class OptHeaderComponent implements OnInit {
  @Input() page_with_two_sidebar: boolean;
  @Input() page_with_mega_menu: boolean;

  ngOnInit() {
  }
}
