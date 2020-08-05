export interface NavigationParams {
    [key: string]: any;
}
export interface NavigationNavigateActionPayload {
    routeName: string;
    params?: NavigationParams;
    action?: NavigationNavigateAction;
    key?: string;
}
export interface NavigationNavigateAction extends NavigationNavigateActionPayload {
    type: 'Navigation/NAVIGATE';
}
export interface NavigationBackActionPayload {
    key?: string | null;
    immediate?: boolean;
}
export interface NavigationBackAction extends NavigationBackActionPayload {
    type: 'Navigation/BACK';
}
export interface NavigationInitActionPayload {
    params?: NavigationParams;
}
export interface NavigationInitAction extends NavigationInitActionPayload {
    type: 'Navigation/INIT';
}
export interface NavigationSetParamsActionPayload {
    key: string;
    params?: NavigationParams;
}
export interface NavigationSetParamsAction extends NavigationSetParamsActionPayload {
    type: 'Navigation/SET_PARAMS';
    preserveFocus: true;
}
export declare const BACK = "Navigation/BACK";
export declare const INIT = "Navigation/INIT";
export declare const NAVIGATE = "Navigation/NAVIGATE";
export declare const SET_PARAMS = "Navigation/SET_PARAMS";
export declare const back: (payload?: NavigationBackActionPayload) => NavigationBackAction;
export declare const init: (payload?: NavigationInitActionPayload) => NavigationInitAction;
export declare const navigate: (payload: NavigationNavigateActionPayload) => NavigationNavigateAction;
export declare const setParams: (payload: NavigationSetParamsActionPayload) => NavigationSetParamsAction;
