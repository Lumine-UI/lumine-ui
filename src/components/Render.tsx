import React from "react";
import type {
  Component,
  Text,
  View,
  Button,
  StatusBar,
  LumineContextComponent,
  Ionicon,
  Navigator,
  Screen,
  Image
} from "./types";
import TextImpl from "./Text";
import ViewImpl from "./View";
import ButtonImpl from "./Button";
import StatusBarImpl from "./StatusBar";
import LumineContextComponentImpl from "./LumineContextComponent";
import IoniconImpl from "./Ionicon";
import ScreenImpl from "./Screen";
import NavigatorImpl from "./Navigator";
import ImageImpl from "./Image";

const Render: React.FC<{ component: Component; key?: string | number }> = ({
  component,
  key,
}) => {
  switch (component.type) {
    case "Text":
      return <TextImpl key={key} {...(component as Text)} />;
    case "View":
      return <ViewImpl key={key} {...(component as View)} />;
    case "Button":
      return <ButtonImpl key={key} {...(component as Button)} />;
    case "StatusBar":
      return <StatusBarImpl key={key} {...(component as StatusBar)} />;
    case "Ionicon":
      return <IoniconImpl key={key} {...(component as Ionicon)} />;
    case "Screen":
      return <ScreenImpl key={key} {...(component as Screen)} />;
    case "Navigator":
      return <NavigatorImpl key={key} {...(component as Navigator)} />;
    case "LumineContextComponent":
      return (
        <LumineContextComponentImpl
          key={key}
          {...(component as LumineContextComponent)}
        />
      );
    case "Image":
      return <ImageImpl key={key} {...(component as Image)} />;
    default:
      return null;
  }
};

export { Render };
