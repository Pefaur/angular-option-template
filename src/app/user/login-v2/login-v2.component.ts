import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionTemplateComponent } from '../../option-template.component';

// @Component({
//   selector: 'opt-login',
//   templateUrl: './login-v2.component.html',
//   styleUrls: ['./login-v2.component.scss']
// })
export class OptLoginV2Component implements OnInit {
  BACKGROUND_IMAGES = [
    'assets/img/bg-1.jpeg',
    'assets/img/bg-2.jpeg',
    'assets/img/bg-3.jpeg',
    'assets/img/bg-4.jpeg',
    'assets/img/bg-5.jpeg',
    'assets/img/bg-6.jpeg',
    'assets/img/bg-7.jpeg',
    'assets/img/bg-8.jpeg'
  ];

  backgroundImage: string;

  constructor(protected app: OptionTemplateComponent, protected router: Router) {
    app.setPageWithoutSidebar(true);
    app.setPageWithoutHeader(true);
    app.setPagePaceTop(true);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  ngOnInit(): void {
    window.dispatchEvent(new CustomEvent('page-login-v2-ready'));
    const indexImage = Math.floor(Math.random() * this.BACKGROUND_IMAGES.length);
    this.backgroundImage = this.BACKGROUND_IMAGES[indexImage];
  }
}
