import React from "react";
import type { StateVariable } from "./types";

interface LumineContext {
    state: StateVariable[];
    setState: React.Dispatch<React.SetStateAction<StateVariable[] | undefined>>;
}

const LumineContext = React.createContext({} as LumineContext);

export default LumineContext;