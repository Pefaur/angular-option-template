import { Component, Input, AfterViewInit } from '@angular/core';

// @Component({
//   selector: 'opt-sidebar-two',
//   templateUrl: './sidebar-two.component.html'
// })
export class OptSidebarTwoComponent implements AfterViewInit {
  // fire event sidebar-two-ready
  ngAfterViewInit() {
    window.dispatchEvent(new CustomEvent('sidebar-two-ready'));
  }
}
