import { Button as RNPButton } from "react-native-paper";
import type { Button, Action } from "./types";
import { Render } from "./Render";
import LumineContext from "./LumineContext";
import React from "react";

const isAction = (action: Action | string | undefined): action is Action => {
  return typeof action === "object" && action !== null && "type" in action;
};

const ButtonImpl: React.FC<Button> = (props: Button) => {
  const { buttonProps, child, onPress } = props;

  if (onPress && isAction(onPress)) {
    if (
      onPress.type === "stateUpdate" &&
      onPress.stateVariableName &&
      onPress.stateOperation
    ) {
      const { state, setState } = React.useContext(LumineContext);
      return (
        <RNPButton
          {...buttonProps}
          onPress={() => {
            setState(
              state.map((element) => {
                if (element.name === onPress.stateVariableName) {
                  return {
                    ...element,
                    value: eval(`${element.value}${onPress.stateOperation}`),
                  };
                }
                return element;
              })
            );
          }}
        >
          <Render component={child} />
        </RNPButton>
      );
    }
  }

  return (
    <RNPButton {...buttonProps}>
      <Render component={child} />
    </RNPButton>
  );
};

export default ButtonImpl;
