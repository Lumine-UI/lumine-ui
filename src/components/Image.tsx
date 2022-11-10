import React from "react";
import type { Image } from "./types";
import { Image as RNImage } from "react-native";

const ImageImpl: React.FC<Image> = (props: Image) => {
  const { imageProps } = props;
  return (
    <RNImage {...imageProps} />
  );
};

export default ImageImpl;