import { Ionicon, Screen } from "./types";

class ScreenImpl implements Screen {
    type = "Screen";
    id?: string | number;
    url?: string;
    name?: string;
    tabBarIcon?: Ionicon;
    tabBarFocusedIcon?: Ionicon;

    constructor(screen: Screen) {
        this.id = screen.id;
        this.url = screen.url;
        this.name = screen.name;
        this.tabBarIcon = screen.tabBarIcon;
        this.tabBarFocusedIcon = screen.tabBarFocusedIcon;
    }
}

export default ScreenImpl;