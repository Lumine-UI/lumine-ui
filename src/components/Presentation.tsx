import React from "react";
import type { PresentationData } from "./types";
import { Render } from "./Render";

const renderPresentation: React.FC<{ presentationData: PresentationData }> = ({
  presentationData,
}) => {
  return (
    <>
      {presentationData.components.map((component, index) => {
        return (
          <React.Fragment key={index.toString()}>
            <Render component={component} />
          </React.Fragment>
        );
      })}
    </>
  );
};

const Presentation: React.FC<PresentationData> = (presentationData) => {
  return renderPresentation({ presentationData });
};

export { Presentation as default, renderPresentation };
