import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionTemplateComponent } from "../../option-template.component";
export declare class OptRegisterComponent implements OnInit {
    protected app: OptionTemplateComponent;
    protected router: Router;
    constructor(app: OptionTemplateComponent, router: Router);
    ngOnInit(): void;
    goToLogin(): void;
}
