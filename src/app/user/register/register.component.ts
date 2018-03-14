import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionTemplateComponent } from "../../option-template.component";

// @Component({
//   selector: 'opt-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
export class OptRegisterComponent implements OnInit {

  constructor(protected app: OptionTemplateComponent, protected router: Router) {
    app.setPageWithoutSidebar(true);
    app.setPageWithoutHeader(true);
    app.setPagePaceTop(true);
  }

  ngOnInit() {
    window.dispatchEvent(new CustomEvent('page-register-ready'));
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
