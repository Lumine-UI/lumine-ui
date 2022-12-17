import React from "react";

interface GlobalContextParams {
    actions?: any;
    components?: any;
}

const GlobalContext = React.createContext({} as GlobalContextParams);

export default GlobalContext;