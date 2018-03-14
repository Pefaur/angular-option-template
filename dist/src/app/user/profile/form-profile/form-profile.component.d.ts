import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OptFormComponent, OptUserService } from '@option/core';
import { ISubscription } from 'rxjs/Subscription';
export declare class OptFormProfileComponent extends OptFormComponent implements OnInit, OnDestroy {
    protected formBuilder: FormBuilder;
    protected userService: OptUserService;
    protected router: Router;
    requestSubscribes: ISubscription[];
    SERVER_MESSAGES: any;
    formErrors: any;
    VALIDATION_MESSAGES: any;
    PLACEHOLDERS: any;
    LABELS: any;
    SUBMIT_LABEL: string;
    constructor(formBuilder: FormBuilder, userService: OptUserService, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    submit(): void;
}
