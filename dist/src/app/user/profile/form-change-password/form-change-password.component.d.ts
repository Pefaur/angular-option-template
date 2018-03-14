import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OptFormComponent, OptUserService } from '@option/core';
export declare class OptFormChangePasswordComponent extends OptFormComponent implements OnInit {
    protected formBuilder: FormBuilder;
    protected userService: OptUserService;
    protected router: Router;
    SERVER_MESSAGES: any;
    formErrors: any;
    VALIDATION_MESSAGES: any;
    PLACEHOLDERS: any;
    LABELS: any;
    SUBMIT_LABEL: string;
    constructor(formBuilder: FormBuilder, userService: OptUserService, router: Router);
    submit(): void;
}
