import { RNPButtonProps, Button, Component, ComponentType, Action } from "./types";

//   TODO: icon?: IconSource;
class ButtonImpl implements Button {
  type?: ComponentType;
  id?: string | number;
  child: Component;
  buttonProps: RNPButtonProps;
  onPress?: Action | string | undefined;

  constructor(button: Button) {
    this.type = "Button";
    this.id = button.id;
    this.child = button.child;
    this.buttonProps = button.buttonProps;
    this.onPress = button.onPress;
  }
}

export default ButtonImpl;
