import React from "react";
import type { LumineContextParams } from "./LumineContext";
import type { LumineContextComponent } from "./types";
import { Render } from "./Render";

const LumineContextComponentImpl: React.FC<LumineContextComponent> = ({
  name,
  children,
  stateVariables,
  contexts
}) => {
  const Ctx = React.createContext({} as LumineContextParams);
  const [state, setState] = React.useState(stateVariables);
  contexts ? (contexts[name] = Ctx) : (contexts = { [name]: Ctx });
  return (
    <Ctx.Provider value={{state: state ? state : [], setState: setState}}>
      {children?.map((component, index) => {
        const componentWithContext = { ...component, contexts: contexts };
        return (
          <React.Fragment key={index.toString()}>
            <Render component={componentWithContext} />
          </React.Fragment>
        );
      })}
    </Ctx.Provider>
  );
};

export default LumineContextComponentImpl;
