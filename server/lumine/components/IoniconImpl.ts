import { Ionicon, ComponentType, IconProps } from "./types";
import { IoniconName } from "../@types";

class IoniconImpl implements Ionicon {
    type?: ComponentType;
    id?: string | number;
    iconProps: IconProps<IoniconName>; 

    constructor(ionicon: Ionicon) {
        this.type = "Ionicon";
        this.id = ionicon.id;
        this.iconProps = ionicon.iconProps;
    }
}

export default IoniconImpl;