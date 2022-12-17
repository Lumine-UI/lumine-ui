import { Component, LumineContextComponent, StateVariable } from "./types";

class LumineContextComponentImpl implements LumineContextComponent {
    type?: string;
    id?: string | number;
    name: string;
    children?: Component[];
    stateVariables?: StateVariable[];

    constructor(lumineContextComponent: LumineContextComponent) {
        this.type = "LumineContextComponent";
        this.id = lumineContextComponent.id;
        this.name = lumineContextComponent.name;
        this.children = lumineContextComponent.children;
        this.stateVariables = lumineContextComponent.stateVariables;
    }
}

export default LumineContextComponentImpl;