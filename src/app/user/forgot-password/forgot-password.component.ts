import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptionTemplateComponent } from "../../option-template.component";

// @Component({
//   selector: 'opt-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.scss']
// })
export class OptForgotPasswordComponent implements OnInit {

  constructor(protected app: OptionTemplateComponent, protected router: Router, protected formBuilder: FormBuilder) {
    app.setPageWithoutSidebar(true);
    app.setPageWithoutHeader(true);
    app.setPagePaceTop(true);
  }

  ngOnInit() {
    window.dispatchEvent(new CustomEvent('page-login-ready'));
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
