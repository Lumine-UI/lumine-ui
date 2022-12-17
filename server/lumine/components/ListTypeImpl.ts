import exp from "constants";
import { Component, ListType, Orientation } from "./types";

class ListTypeImpl implements ListType{
    orientation: Orientation;
    items: Component[];
    type?: string;
    id?: string | number;
    constructor(listType: ListType){
        this.id = listType.id;
        this.type = "ListType";
        this.items = listType.items;
        this.orientation = listType.orientation;
    }
}
export default ListTypeImpl;