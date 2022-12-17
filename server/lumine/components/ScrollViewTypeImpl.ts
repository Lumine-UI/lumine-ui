import { ViewStyle, StyleProp } from "../@types";
import { Component, Orientation, ScrollViewType } from "./types";
class ScrollViewTypeImpl implements ScrollViewType{
    orientation: Orientation;
    items: Component[];
    style?: StyleProp<ViewStyle>
    type?: string;
    id?: string | number;
    constructor(scrollViewType: ScrollViewType){
        this.type = "ScrollViewType"
        this.id = scrollViewType.id
        this.orientation = scrollViewType.orientation
        this.items = scrollViewType.items
    }
}
export default ScrollViewTypeImpl;