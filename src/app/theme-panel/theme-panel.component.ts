import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'opt-theme-panel',
//   templateUrl: './theme-panel.component.html'
// })
export class OptThemePanelComponent implements OnInit {
  ngOnInit() {
    window.dispatchEvent(new CustomEvent('theme-panel-ready'));
  }
}
