import ViewImpl from "./components/View";
import ButtonImpl from "./components/Button";
import Presentation from "./components/Presentation";
import TextImpl from "./components/Text";
import IoniconImpl from "./components/Ionicon";
import ScreenImpl from "./components/Screen";
import CardImpl from "./components/Card";
import NavigatorImpl from "./components/Navigator";
import StatusBarImpl from "./components/StatusBar";
import ImageImpl from "./components/Image";
import TextInputImpl from "./components/TextInput";
import ScrollViewImpl from "./components/ScrollView";

import NavHost from "./components/NavHost";
import { Render } from "./components/Render";
import GlobalContext from "./components/GlobalContext";

import type { 
  Component,
  View,
  Button,
  Ionicon,
  Text, 
  Screen,
  Card,
  Navigator,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
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
  Card as CardType,
  CardImpl as Card,
  Navigator as NavigatorType,
  NavigatorImpl as Navigator,
  StatusBar as StatusBarType,
  StatusBarImpl as StatusBar,
  Image as ImageType,
  ImageImpl as Image,
  TextInput as TextInputType,
  TextInputImpl as TextInput,
  ScrollView as ScrollViewType,
  ScrollViewImpl as ScrollView,
  NavHost,
  Render,
  PresentationData,
  Presentation,
  GlobalContext
};