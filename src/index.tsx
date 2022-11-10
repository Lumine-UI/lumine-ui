import ViewImpl from "./components/View";
import ButtonImpl from "./components/Button";
import Presentation from "./components/Presentation";
import TextImpl from "./components/Text";
import IoniconImpl from "./components/Ionicon";
import ScreenImpl from "./components/Screen";
import NavigatorImpl from "./components/Navigator";
import StatusBarImpl from "./components/StatusBar";
import ImageImpl from "./components/Image";

import NavHost from "./components/NavHost";
import { Render } from "./components/Render";

import type { 
  Component,
  View,
  Button,
  Ionicon,
  Text, 
  Screen,
  Navigator,
  StatusBar,
  Image,
  PresentationData
} from "./components/types";

export {
  Component as ComponentType,
  ViewImpl as View,
  View as ViewType,
  ButtonImpl as Button,
  Button as ButtonType,
  TextImpl as Text,
  Text as TextType,
  Ionicon as IoniconType,
  IoniconImpl as Ionicon,
  Screen as ScreenType,
  ScreenImpl as Screen,
  Navigator as NavigatorType,
  NavigatorImpl as Navigator,
  StatusBar as StatusBarType,
  StatusBarImpl as StatusBar,
  Image as ImageType,
  ImageImpl as Image,
  NavHost,
  Render,
  PresentationData,
  Presentation,
};