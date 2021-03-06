import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
export declare class OptionTemplateComponent implements OnInit {
    protected router: Router;
    protected route: ActivatedRoute;
    page_sidebar_minified: boolean;
    page_with_footer: boolean;
    page_content_full_height: boolean;
    page_content_full_width: boolean;
    page_sidebar_transparent: boolean;
    page_with_wide_sidebar: boolean;
    page_with_light_sidebar: boolean;
    page_with_right_sidebar: boolean;
    page_without_sidebar: boolean;
    page_with_two_sidebar: boolean;
    page_with_top_menu: boolean;
    page_with_mega_menu: boolean;
    page_boxed_layout: boolean;
    page_content_inverse_mode: boolean;
    page_bg_white: boolean;
    page_without_header: boolean;
    page_pace_top: boolean;
    setPageSidebarMinified(setting: boolean): void;
    setPageFooter(setting: boolean): void;
    setPageWideSidebar(setting: boolean): void;
    setPageContentFullHeight(setting: boolean): void;
    setPageContentFullWidth(setting: boolean): void;
    setPageSidebarTransparent(setting: boolean): void;
    setPageLightSidebar(setting: boolean): void;
    setPageRightSidebar(setting: boolean): void;
    setPageWithoutSidebar(setting: boolean): void;
    setPageTwoSidebar(setting: boolean): void;
    setPageTopMenu(setting: boolean): void;
    setPageTransparentSidebar(setting: boolean): void;
    setPageMegaMenu(setting: boolean): void;
    setPageContentInverseMode(setting: boolean): void;
    setPageBoxedLayout(setting: boolean): void;
    setPageBgWhite(setting: boolean): void;
    setPageWithoutHeader(setting: boolean): void;
    setPagePaceTop(setting: boolean): void;
    clearSettings(): void;
    constructor(router: Router, route: ActivatedRoute);
    ngOnInit(): void;
}
