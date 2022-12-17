import { RNPTextInputProps, TextInput, Action } from "./types";

class TextInputImpl implements TextInput {
  type?: string;
  id?: string | number;
  textInputProps?: RNPTextInputProps;
  render?: Action | string | undefined;
  onBlur?: Action | string | undefined;
  onChange?: Action | string | undefined;
  onChangeText?: Action | string | undefined;
  onContentSizeChange?: Action | string | undefined;
  onEndEditing?: Action | string | undefined;
  onPressIn?: Action | string | undefined;
  onPressOut?: Action | string | undefined;
  onFocus?: Action | string | undefined;
  onSelectionChange?: Action | string | undefined;
  onSubmitEditing?: Action | string | undefined;
  onTextInput?: Action | string | undefined;
  onScroll?: Action | string | undefined;
  onKeyPress?: Action | string | undefined;

  constructor(textInput: TextInput) {
    this.type = "TextInput";
    this.id = textInput.id;
    this.textInputProps = textInput.textInputProps;
    this.render = textInput.render;
    this.onBlur = textInput.onBlur;
    this.onChange = textInput.onChange;
    this.onChangeText = textInput.onChangeText;
    this.onContentSizeChange = textInput.onContentSizeChange;
    this.onEndEditing = textInput.onEndEditing;
    this.onPressIn = textInput.onPressIn;
    this.onPressOut = textInput.onPressOut;
    this.onFocus = textInput.onFocus;
    this.onSelectionChange = textInput.onSelectionChange;
    this.onSubmitEditing = textInput.onSubmitEditing;
    this.onTextInput = textInput.onTextInput;
    this.onScroll = textInput.onScroll;
    this.onKeyPress = textInput.onKeyPress;
  }
}

export default TextInputImpl;
