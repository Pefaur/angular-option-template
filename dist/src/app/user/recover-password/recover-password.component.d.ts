import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionTemplateComponent } from "../../option-template.component";
export declare class OptRecoverPasswordComponent implements OnInit {
    protected app: OptionTemplateComponent;
    protected router: Router;
    goToLogin(): void;
    constructor(app: OptionTemplateComponent, router: Router);
    ngOnInit(): void;
}
