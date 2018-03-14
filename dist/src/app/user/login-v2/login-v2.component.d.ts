import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionTemplateComponent } from '../../option-template.component';
export declare class OptLoginV2Component implements OnInit {
    protected app: OptionTemplateComponent;
    protected router: Router;
    BACKGROUND_IMAGES: string[];
    backgroundImage: string;
    constructor(app: OptionTemplateComponent, router: Router);
    goToRegister(): void;
    goToForgotPassword(): void;
    ngOnInit(): void;
}
