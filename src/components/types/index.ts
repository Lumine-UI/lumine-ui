import type {
  TextProps,
  ViewProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  StatusBarProps,
  OpaqueColorValue,
  ImageProps
} from "react-native";
import type Color from "../../constants/colors";
import type { LumineContextParams } from "../LumineContext";
import type { TextInputProps } from "react-native-paper";

export type Orientation = "horizontal" | "vertical";

export type ComponentType =
  | "Text"
  | "Button"
  | "TextInput"
  | "List"
  | "View"
  | "StatusBar"
  | "Ionicon"
  | "Screen"
  | "Navigator"
  | "Image"
  | "ScrollView"
  | "LumineContextComponent";

export type ActionType =
  | "navigateBack"
  | "navigateTo"
  | "navigateToRoot"
  | "get"
  | "post"
  | "patch"
  | "put"
  | "head"
  | "delete"
  | "options"
  | "stateUpdate"
  | "custom";

export interface Action {
  type: ActionType | string;
  screenName?: string;
  params?: any;
  url?: string;
  route?: string;
  stateVariableName?: string;
  stateOperation?: string;
  customAction?: string;
  customArgs?: string;
}

export interface Component {
  type?: ComponentType | string;
  id?: string | number;
  contexts?: { [key: string]: React.Context<LumineContextParams> };
}

export interface StateVariable {
  name: string;
  value: any;
}

export interface LumineContextComponent extends Component {
  name: string;
  children?: Component[];
  stateVariables?: StateVariable[];
}

export interface Text extends Component {
  text?: string;
  child?: Component;
  textProps?: TextProps;
  onLayout?: string | undefined;
  onTextLayout?: string | undefined;
  onPress?: Action | string | undefined;
  onPressIn?: string | undefined;
  onPressOut?: string | undefined;
  onLongPress?: string | undefined;
}

export interface View extends Component {
  viewProps?: ViewProps;
  children?: Component[];
  onLayout?: string | undefined;
  onAccessibilityAction?: string | undefined;
  onStartShouldSetResponder?: string | undefined;
  onMoveShouldSetResponder?: string | undefined;
  onResponderEnd?: string | undefined;
  onResponderGrant?: string | undefined;
  onResponderReject?: string | undefined;
  onResponderMove?: string | undefined;
  onResponderRelease?: string | undefined;
  onResponderStart?: string | undefined;
  onResponderTerminationRequest?: string | undefined;
  onResponderTerminate?: string | undefined;
  onStartShouldSetResponderCapture?: string | undefined;
  onMoveShouldSetResponderCapture?: string | undefined;
  onAccessibilityEscape?: string | undefined;
  onAccessibilityTap?: string | undefined;
  onMagicTap?: string | undefined;
  onTouchStart?: string | undefined;
  onTouchMove?: string | undefined;
  onTouchEnd?: string | undefined;
  onTouchCancel?: string | undefined;
  onTouchEndCapture?: string | undefined;
}

//   TODO: icon?: IconSource;
export type RNPButtonProps = ViewProps & {
  mode?: "text" | "outlined" | "contained";
  dark?: boolean;
  compact?: boolean;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  uppercase?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  contentStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

export interface Button extends Component {
  child: Component;
  buttonProps: RNPButtonProps;
  onPress?: Action | string | undefined;
}

export interface StatusBar extends Component {
  statusBarProps: StatusBarProps;
}

export interface IconProps<GLYPHS extends string> extends TextProps {
  /**
   * Size of the icon, can also be passed as fontSize in the style object.
   *
   * @default 12
   */
  size?: number;
  /**
   * Name of the icon to show
   *
   * See Icon Explorer app
   * {@link https://expo.github.io/vector-icons/}
   */
  name: GLYPHS;
  /**
   * Color of the icon. Can be a string or OpaqueColorValue (returned from
   * PlatformColor(..))
   *
   */
  color?: Color | OpaqueColorValue | string;
}

export interface Ionicon extends Component {
  iconProps: IconProps<string>;
}

export interface TextInput extends Component {
  textInputProps?: TextInputProps;
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
}

export type NavigatorType = "stack" | "bottom-tab" | "material-bottom-tab";

export interface Screen extends Component {
  url?: string;
  name?: string;
  tabBarIcon?: Ionicon;
  tabBarFocusedIcon?: Ionicon;
}

export interface Card extends Component {
  viewProps?: ViewProps;
  children?: Component[];
  elevation?: number;
}

export interface Navigator extends Component {
  navigatorType: NavigatorType;
  screens?: Screen[];
  headerShown?: boolean;
}

export interface ScrollView extends Component {
  style?: StyleProp<ViewStyle>;
  orientation: Orientation;
  items: Component[];
}

export interface Image extends Component {
  imageProps?: ImageProps,
  onProgress?: Action | string | undefined;
  onPartialLoad?: Action | string | undefined;
  onLayout?: Action | string | undefined;
  onError?: Action | string | undefined;
  onLoad?: Action | string | undefined;
  onLoadEnd?: Action | string | undefined; 
  onLoadStart?: Action | string | undefined;
}

export interface PresentationData {
  components: Component[];
}
export interface ListType extends Component {
  orientation: Orientation;
  items: Component[];
}
