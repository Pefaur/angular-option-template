import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OptFormComponent, OptAuthService } from '@option/core';
import { ISubscription } from 'rxjs/Subscription';
export declare class OptFormRecoverPasswordComponent extends OptFormComponent implements OnInit, OnDestroy {
    protected formBuilder: FormBuilder;
    protected authService: OptAuthService;
    protected router: Router;
    protected activatedRoute: ActivatedRoute;
    onSubmitted: EventEmitter<{}>;
    onSubmitError: EventEmitter<{}>;
    requestSubscribes: ISubscription[];
    token: string;
    formErrors: {
        'password': string;
        'repeatPassword': string;
    };
    VALIDATION_MESSAGES: {
        'password': {
            'required': string;
            'minlength': string;
        };
        'repeatPassword': {
            'required': string;
            'MatchPassword': string;
        };
    };
    SERVER_MESSAGES: {
        204: string;
        404: string;
        401: string;
    };
    PLACEHOLDERS: {
        'password': string;
        'repeatPassword': string;
    };
    SUMBIT_LABEL: string;
    constructor(formBuilder: FormBuilder, authService: OptAuthService, router: Router, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    goToLogin(): void;
    submit(): void;
}
