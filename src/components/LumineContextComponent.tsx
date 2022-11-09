import React from "react";
import LumineContext from "./LumineContext";
import type { LumineContextComponent } from "./types";
import { Render } from "./Render";

const LumineContextComponentImpl: React.FC<LumineContextComponent> = ({
  children,
  stateVariables,
}) => {
  const [state, setState] = React.useState(stateVariables);
  return (
    <LumineContext.Provider value={{state: state ? state : [], setState: setState}}>
      {children?.map((component, index) => {
        return (
          <React.Fragment key={index.toString()}>
            <Render component={component} />
          </React.Fragment>
        );
      })}
    </LumineContext.Provider>
  );
};

export default LumineContextComponentImpl;
