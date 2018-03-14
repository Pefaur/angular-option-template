import { AfterViewInit } from '@angular/core';
export declare class OptTopMenuComponent implements AfterViewInit {
    ngAfterViewInit(): void;
    menu: ({
        title: string;
        icon: string;
        link: string;
        caret: string;
        submenu: {
            title: string;
            link: string;
        }[];
    } | {
        title: string;
        icon: string;
        link: string;
        badge: string;
        submenu: {
            title: string;
            link: string;
        }[];
    } | {
        title: string;
        icon: string;
        link: string;
        label: string;
        caret: boolean;
        submenu: ({
            title: string;
            link: string;
        } | {
            title: string;
            link: string;
            highlight: string;
        })[];
    } | {
        title: string;
        icon: string;
        link: string;
        caret: boolean;
        submenu: ({
            title: string;
            link: string;
        } | {
            title: string;
            link: string;
            caret: boolean;
            submenu: {
                title: string;
                link: string;
            }[];
        })[];
    } | {
        title: string;
        icon: string;
        link: string;
        caret: boolean;
        submenu: {
            title: string;
            link: string;
            external: boolean;
        }[];
    } | {
        title: string;
        icon: string;
        link: string;
    } | {
        title: string;
        icon: string;
        link: string;
        caret: boolean;
        label: string;
        submenu: ({
            title: string;
            link: string;
            external: boolean;
        } | {
            title: string;
            link: string;
            highlight: boolean;
        })[];
    })[];
}
