import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OptionTemplateComponent } from '../option-template.component';

// @Component({
//   selector: 'opt-not-found',
//   templateUrl: './not-found.component.html',
//   styleUrls: ['./not-found.component.scss']
// })
export class OptNotFoundComponent {

  constructor(protected app: OptionTemplateComponent, protected router: Router) {
    app.setPageWithoutHeader(true);
    app.setPageTopMenu(false);
    app.setPageWithoutSidebar(true);
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
