import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionTemplateComponent } from '../../option-template.component';

// @Component({
//   selector: 'opt-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
export class OptLoginComponent implements OnInit {

  constructor(protected app: OptionTemplateComponent, protected router: Router) {
    app.setPageWithoutSidebar(true);
    app.setPageWithoutHeader(true);
    app.setPagePaceTop(true);
  }

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  ngOnInit() {
    window.dispatchEvent(new CustomEvent('page-login-ready'));
  }
}
