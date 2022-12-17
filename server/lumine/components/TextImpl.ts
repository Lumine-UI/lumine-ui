import { Component, ComponentType, Text, Action } from "./types";
import { TextProps } from "../@types";

class TextImpl implements Text {
  type?: ComponentType;
  id?: string | number;
  text?: string;
  child?: Component;
  textProps?: TextProps;
  /**
   * Invoked on mount and layout changes with
   *
   * {nativeEvent: { layout: {x, y, width, height}}}.
   */
  onLayout?: string | undefined;

  /**
   * Invoked on Text layout
   */
  onTextLayout?: string | undefined;

  /**
   * This function is called on press.
   * Text intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).
   */
  onPress?: Action | string | undefined;

  onPressIn?: string | undefined;
  onPressOut?: string | undefined;

  /**
   * This function is called on long press.
   * e.g., `onLongPress={this.increaseSize}>``
   */
  onLongPress?: string | undefined;

  constructor(text: Text) {
    this.type = "Text";
    this.id = text.id;
    this.text = text.text;
    this.child = text.child;
    this.textProps = text.textProps;
    this.onLayout = text.onLayout;
    this.onTextLayout = text.onTextLayout;
    this.onPress = text.onPress;
    this.onPressIn = text.onPressIn;
    this.onPressOut = text.onPressOut;
    this.onLongPress = text.onLongPress;
  }
}

export default TextImpl;
