import { Text as RNPText } from "react-native-paper";
import type { Text } from "./types";
import React from "react";

const TextImpl: React.FC<Text> = (props: Text) => {
  const {
    text,
    textProps,
    contexts,
  } = props;
  if (text?.startsWith("{{") && text?.endsWith("}}")) {
    const varStr = text.substring(2, text.length - 2);

    const ctxName = varStr.split(".")[0];
    const varName = varStr.split(".")[1];

    if(ctxName && varName && contexts) {
      // @ts-ignore
      const {state} = React.useContext(contexts[ctxName]);
      return (
        <RNPText {...textProps}>
          {state.find((element) => element.name === varName)?.value}
        </RNPText>
      );
    }
  }

  return <RNPText {...textProps}>{text}</RNPText>;
};

export default TextImpl;
