import React from "react";

import { TextInput as RNPTextInput } from "react-native-paper";
import type { TextInput } from "./types";

const TextInputImpl: React.FC<TextInput> = (props: TextInput) => {
  const { textInputProps } = props;
  return (
    <RNPTextInput {...textInputProps} />
  );
};

export default TextInputImpl;