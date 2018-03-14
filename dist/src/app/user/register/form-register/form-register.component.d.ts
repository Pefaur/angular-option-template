import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OptFormComponent, OptAuthService } from '@option/core';
export declare class OptFormRegisterComponent extends OptFormComponent implements OnInit {
    protected formBuilder: FormBuilder;
    protected authService: OptAuthService;
    protected router: Router;
    SERVER_MESSAGES: any;
    formErrors: any;
    VALIDATION_MESSAGES: any;
    PLACEHOLDERS: any;
    LABELS: any;
    SUBMIT_LABEL: string;
    constructor(formBuilder: FormBuilder, authService: OptAuthService, router: Router);
    submit(): void;
}
