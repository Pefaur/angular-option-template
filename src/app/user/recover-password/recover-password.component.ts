import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionTemplateComponent } from "../../option-template.component";

// @Component({
//   selector: 'opt-recover-password',
//   templateUrl: './recover-password.component.html',
//   styleUrls: ['./recover-password.component.scss']
// })
export class OptRecoverPasswordComponent implements OnInit {

  goToLogin() {
    this.router.navigate(['/admin/login']);
  }

  constructor(protected app: OptionTemplateComponent, protected router: Router) {
    app.setPageWithoutSidebar(true);
    app.setPageWithoutHeader(true);
    app.setPagePaceTop(true);
  }

  ngOnInit() {
    window.dispatchEvent(new CustomEvent('page-login-ready'));
  }
}
