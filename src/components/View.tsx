import React from "react";
import type { View } from "./types";
import { View as RNView } from "react-native";
import { Render } from "./Render";

const ViewImpl: React.FC<View> = (props: View) => {
  const { viewProps, children } = props;
  return (
    <RNView {...viewProps}>
      {children?.map((child, index) => {
        return <React.Fragment key={index.toString()}>
          <Render component={child} />
        </React.Fragment>;
      })}
    </RNView>
  );
};

export default ViewImpl;
