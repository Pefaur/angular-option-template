import { Component, OnInit } from '@angular/core';
import { OptionTemplateComponent } from '../../option-template.component';

// @Component({
//   selector: 'opt-profile',
//   templateUrl: './profile.component.html'
// })
export class OptProfileComponent implements OnInit {
  constructor(protected app: OptionTemplateComponent) {
    app.setPageWithoutHeader(true);
    app.setPageTopMenu(true);
    app.setPageWithoutSidebar(true);
  }

  ngOnInit() {
    window.dispatchEvent(new CustomEvent('page-profile-ready'));
  }
}
