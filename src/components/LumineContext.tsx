import React from "react";
import type { StateVariable } from "./types";

export interface LumineContextParams {
    state: StateVariable[];
    setState: React.Dispatch<React.SetStateAction<StateVariable[] | undefined>> |  React.Dispatch<React.SetStateAction<StateVariable[]>>;
}

const LumineContext = React.createContext({} as LumineContextParams);

export default LumineContext;