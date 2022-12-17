import { StatusBar, ComponentType } from "./types";
import { StatusBarProps } from "../@types";

class StatusBarImpl implements StatusBar {
    type?: ComponentType;
    id?: string | number;
    statusBarProps: StatusBarProps;
    
    constructor(statusBar: StatusBar) {
        this.type = "StatusBar";
        this.id = statusBar.id;
        this.statusBarProps = statusBar.statusBarProps;
    }
}

export default StatusBarImpl;