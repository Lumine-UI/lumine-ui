import { ViewProps } from "../@types";
import { CardType, Component, ComponentType } from "./types";

class CardTypeImpl implements CardType{
    type?: ComponentType | string;
    id?: string | number;
    viewProps?: ViewProps;
    children?: Component[];
    elevation?: number;
    constructor(cardType: CardType){
        this.type = "Card";
        this.id = cardType.id;
        this.elevation = cardType.elevation;
        this.children = cardType.children;
        this.viewProps = cardType.viewProps;
    }
}
export default CardTypeImpl;