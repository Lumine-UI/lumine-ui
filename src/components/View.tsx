import React from "react";
import type { View } from "./types";
import { View as RNView } from "react-native";
import { Render } from "./Render";

const ViewImpl: React.FC<View> = (props: View) => {
  const { viewProps, children, contexts } = props;
  return (
    <RNView {...viewProps}>
      {children?.map((child, index) => {
        const childWithContext = { ...child, contexts: contexts };
        return <React.Fragment key={index.toString()}>
          <Render component={childWithContext} />
        </React.Fragment>;
      })}
    </RNView>
  );
};

export default ViewImpl;
