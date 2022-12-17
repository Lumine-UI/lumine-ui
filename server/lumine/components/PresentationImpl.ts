import { ComponentType, Component, Presentation } from "./types";

class PresentationImpl implements Presentation  {
    components: Component[];

    constructor(presentation: Presentation) {
        this.components = presentation.components;
    }
}

export default PresentationImpl;