import ViewImpl from "./components/View";
import ButtonImpl from "./components/Button";
import Presentation from "./components/Presentation";
import TextImpl from "./components/Text";

import type { 
  Component,
  View,
  Button,
  Text, 
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
  PresentationData,
  Presentation,
};