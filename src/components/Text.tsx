import { Text as RNPText } from "react-native-paper";
import type { Text } from "./types";
import React from "react";
import LumineContext from "./LumineContext";

const TextImpl: React.FC<Text> = (props: Text) => {
  const {
    text,
    textProps,
    textVariableName
  } = props;

  if (textVariableName) {
    const {state} = React.useContext(LumineContext);
    return (
      <RNPText {...textProps}>
        {state.find((element) => element.name === textVariableName)?.value}
      </RNPText>
    );
  }

  return <RNPText {...textProps}>{text}</RNPText>;
};

export default TextImpl;
