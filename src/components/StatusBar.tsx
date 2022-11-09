import React from "react";
import type { StatusBar } from "./types";
import { StatusBar as RNStatusBar } from "react-native";

const StatusBarImpl: React.FC<StatusBar> = ({statusBarProps}) => {
    return <RNStatusBar {...statusBarProps} />;
}

export default StatusBarImpl;