import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OptFormComponent, OptAuthService } from '@option/core';
import { ISubscription } from 'rxjs/Subscription';
export declare class OptFormForgotPasswordComponent extends OptFormComponent implements OnInit, OnDestroy {
    protected formBuilder: FormBuilder;
    protected authService: OptAuthService;
    onSubmitted: EventEmitter<{}>;
    onSubmitError: EventEmitter<{}>;
    requestSubscribes: ISubscription[];
    formErrors: {
        'email': string;
    };
    VALIDATION_MESSAGES: {
        'email': {
            'required': string;
            'email': string;
        };
    };
    SERVER_MESSAGES: {
        204: string;
        400: string;
        404: string;
    };
    PLACEHOLDERS: {
        'email': string;
    };
    SUMBIT_LABEL: string;
    constructor(formBuilder: FormBuilder, authService: OptAuthService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    submit(): void;
}
