import { Button as RNPButton } from "react-native-paper";
import type { Button } from "./types";
import { Render } from "./Render";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { isAction } from "../ActionHandler";

const ButtonImpl: React.FC<Button> = (props: Button) => {
  const { buttonProps, child, onPress, contexts } = props;

  if (onPress && isAction(onPress)) {
    if (
      onPress.type === "stateUpdate" &&
      onPress.stateVariableName &&
      onPress.stateOperation
    ) {

      const varStr = onPress.stateVariableName.substring(2, onPress.stateVariableName.length - 2);

      const ctxName = varStr.split(".")[0];
      const varName = varStr.split(".")[1];

      if (ctxName && varName && contexts) {
        // @ts-ignore
        const { state, setState } = React.useContext(contexts[ctxName]);
        const onPressStateOperation = eval(onPress.stateOperation);
        return (
          <RNPButton
            {...buttonProps}
            onPress={() => {
              setState(
                state.map((element) => {
                  if (element.name === varName) {
                    return {
                      ...element,
                      value: onPressStateOperation(element.value),
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
    else if (onPress.type === "navigateBack" || "navigateTo") {
      const navigation = useNavigation();
      const [onPressHandler, setOnPressHandler] = useState(() => {});

      React.useEffect(() => {
        if (onPress.type === "navigateBack") {
          setOnPressHandler(() => () => navigation.goBack());
        }
        else if (onPress.type === "navigateTo") {
          // console.log(onPress.screenName)
          if(onPress.screenName) {
            // @ts-ignore
            setOnPressHandler(() => () => navigation.navigate(onPress.screenName, onPress.params));
          }
        }
      }, [onPress]);


      return (
        <RNPButton
          {...buttonProps}
          // @ts-ignore
          onPress={onPressHandler}
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
