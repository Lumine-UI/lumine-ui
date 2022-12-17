import { Navigator, Screen, NavigatorType } from "./types";

class NavigatorImpl implements Navigator {
    type = "Navigator";
    id?: string | number;
    navigatorType: NavigatorType;
    screens?: Screen[];
    headerShown?: boolean;

    constructor(navigator: Navigator) {
        this.id = navigator.id;
        this.navigatorType = navigator.navigatorType;
        this.screens = navigator.screens;
        this.headerShown = navigator.headerShown;
    }
}

export default NavigatorImpl;