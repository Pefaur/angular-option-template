import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OptFormComponent, OptAuthService } from '@option/core';
import { ISubscription } from 'rxjs/Subscription';
export declare class OptFormRegisterComponent extends OptFormComponent implements OnInit, OnDestroy {
    protected formBuilder: FormBuilder;
    protected authService: OptAuthService;
    protected router: Router;
    requestSubscribes: ISubscription[];
    SERVER_MESSAGES: any;
    formErrors: any;
    VALIDATION_MESSAGES: any;
    PLACEHOLDERS: any;
    LABELS: any;
    SUBMIT_LABEL: string;
    constructor(formBuilder: FormBuilder, authService: OptAuthService, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    submit(): void;
}
