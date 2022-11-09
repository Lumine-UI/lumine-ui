import React from "react";
import type {
  View,
  Button,
  Text,
  Component,
  LumineContextComponent,
} from "./types";

import TextImpl from "./Text";
import ButtonImpl from "./Button";
import LumineContextComponentImpl from "./LumineContextComponent";
import ViewImpl from "./View";

const Render: React.FC<{ component: Component; key?: string | number }> = ({
  component,
  key,
}) => {
  switch (component.type) {
    case "View":
      return <ViewImpl key={key} {...(component as View)} />;
    case "Text":
      return <TextImpl key={key} {...(component as Text)} />;
    case "Button":
      return <ButtonImpl key={key} {...(component as Button)} />;
    case "LumineContextComponent":
      return (
        <LumineContextComponentImpl
          key={key}
          {...(component as LumineContextComponent)}
        />
      );
    default:
      return null;
  }
};

export { Render };
