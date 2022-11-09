import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";

// Component that will wrap the whole navigation tree
const NavHost: React.FC<{children?: ReactNode}> = (props) => {
    const { children } = props;
    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    );
};

export default NavHost;