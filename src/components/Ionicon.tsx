import React from "react";
import type { Ionicon as Ionicon } from "./types";
import Ionicons from "@expo/vector-icons/Ionicons";

const IoniconImpl: React.FC<Ionicon> = (props: Ionicon) => {
  const { iconProps } = props;
  // @ts-ignore
  return <Ionicons {...iconProps} />;
};

export default IoniconImpl;
