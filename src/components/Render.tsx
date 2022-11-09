import React from "react";
import type {
  View,
  Component
} from "./types";
import ViewImpl from "./View";

const Render: React.FC<{ component: Component; key?: string | number }> = ({
  component,
  key,
}) => {
  switch (component.type) {
    case "View":
      return <ViewImpl key={key} {...(component as View)} />;
    default:
      return null;
  }
};

export { Render };
