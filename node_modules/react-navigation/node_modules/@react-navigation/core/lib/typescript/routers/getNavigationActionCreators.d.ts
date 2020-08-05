import * as NavigationActions from '../NavigationActions';
interface NavigationParams {
    [key: string]: any;
}
declare const getNavigationActionCreators: (route: any) => {
    goBack: (key?: string | null | undefined) => NavigationActions.NavigationBackAction;
    navigate: (navigateTo: string | NavigationActions.NavigationNavigateActionPayload, params?: NavigationParams | undefined, action?: NavigationActions.NavigationNavigateAction | undefined) => NavigationActions.NavigationNavigateAction;
    setParams: (params?: NavigationParams | undefined) => NavigationActions.NavigationSetParamsAction;
};
export default getNavigationActionCreators;
