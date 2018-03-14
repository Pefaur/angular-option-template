import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OptionTemplateComponent } from "../../option-template.component";
export declare class OptForgotPasswordComponent implements OnInit {
    protected app: OptionTemplateComponent;
    protected router: Router;
    protected formBuilder: FormBuilder;
    constructor(app: OptionTemplateComponent, router: Router, formBuilder: FormBuilder);
    ngOnInit(): void;
    goToLogin(): void;
}
