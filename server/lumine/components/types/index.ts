import Color from "../../constants/colors";
import {
  StyleProp,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
  StatusBarProps,
  IoniconName,
  OpaqueColorValue,
  ImageProps,
  TextInputProps,
} from "../../@types";

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
  | "LumineContextComponent"
  | "ScrollViewType"
  | "Image";

export interface StateVariable {
  name: string;
  value: any;
}

export interface Component {
  type?: ComponentType | string;
  id?: string | number;
}

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
  url?: string;
  route?: string;
  screenName?: string;
  params?: any;
  stateVariableName?: string;
  stateOperation?: string;
  customAction?: string;
  customArgs?: string;
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
  /**
   * Invoked on mount and layout changes with
   *
   * {nativeEvent: { layout: {x, y, width, height}}}.
   */
  onLayout?: string | undefined;

  /**
   * Invoked on Text layout
   */
  onTextLayout?: string | undefined;

  /**
   * This function is called on press.
   * Text intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).
   */
  onPress?: Action | string | undefined;

  onPressIn?: string | undefined;
  onPressOut?: string | undefined;

  /**
   * This function is called on long press.
   * e.g., `onLongPress={this.increaseSize}>``
   */
  onLongPress?: string | undefined;
}

export interface View extends Component {
  viewProps?: ViewProps;
  children?: Component[];
  /**
   * Invoked on mount and layout changes with
   *
   * {nativeEvent: { layout: {x, y, width, height}}}.
   */
  onLayout?: string | undefined;
  /**
   * When `accessible` is true, the system will try to invoke this function when the user performs an accessibility custom action.
   */
  onAccessibilityAction?: string | undefined;
  /**
   * A view can become the touch responder by implementing the correct negotiation methods.
   * There are two methods to ask the view if it wants to become responder:
   */

  /**
   * Does this view want to become responder on the start of a touch?
   */
  onStartShouldSetResponder?: string | undefined;

  /**
   * Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness?
   */
  onMoveShouldSetResponder?: string | undefined;

  /**
   * If the View returns true and attempts to become the responder, one of the following will happen:
   */

  onResponderEnd?: string | undefined;

  /**
   * The View is now responding for touch events.
   * This is the time to highlight and show the user what is happening
   */
  onResponderGrant?: string | undefined;

  /**
   * Something else is the responder right now and will not release it
   */
  onResponderReject?: string | undefined;

  /**
   * If the view is responding, the following handlers can be called:
   */

  /**
   * The user is moving their finger
   */
  onResponderMove?: string | undefined;

  /**
   * Fired at the end of the touch, ie "touchUp"
   */
  onResponderRelease?: string | undefined;

  onResponderStart?: string | undefined;

  /**
   *  Something else wants to become responder.
   *  Should this view release the responder? Returning true allows release
   */
  onResponderTerminationRequest?: string | undefined;

  /**
   * The responder has been taken from the View.
   * Might be taken by other views after a call to onResponderTerminationRequest,
   * or might be taken by the OS without asking (happens with control center/ notification center on iOS)
   */
  onResponderTerminate?: string | undefined;

  /**
   * onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,
   * where the deepest node is called first.
   * That means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.
   * This is desirable in most cases, because it makes sure all controls and buttons are usable.
   *
   * However, sometimes a parent will want to make sure that it becomes responder.
   * This can be handled by using the capture phase.
   * Before the responder system bubbles up from the deepest component,
   * it will do a capture phase, firing on*ShouldSetResponderCapture.
   * So if a parent View wants to prevent the child from becoming responder on a touch start,
   * it should have a onStartShouldSetResponderCapture handler which returns true.
   */
  onStartShouldSetResponderCapture?: string | undefined;

  /**
   * onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,
   * where the deepest node is called first.
   * That means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.
   * This is desirable in most cases, because it makes sure all controls and buttons are usable.
   *
   * However, sometimes a parent will want to make sure that it becomes responder.
   * This can be handled by using the capture phase.
   * Before the responder system bubbles up from the deepest component,
   * it will do a capture phase, firing on*ShouldSetResponderCapture.
   * So if a parent View wants to prevent the child from becoming responder on a touch start,
   * it should have a onStartShouldSetResponderCapture handler which returns true.
   */
  onMoveShouldSetResponderCapture?: string | undefined;

  /**
   * When accessibile is true, the system will invoke this function when the user performs the escape gesture (scrub with two fingers).
   * @platform ios
   */
  onAccessibilityEscape?: string | undefined;

  /**
   * When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.
   * @platform ios
   */
  onAccessibilityTap?: string | undefined;

  /**
   * When accessible is true, the system will invoke this function when the user performs the magic tap gesture.
   * @platform ios
   */
  onMagicTap?: string | undefined;

  onTouchStart?: string | undefined;
  onTouchMove?: string | undefined;
  onTouchEnd?: string | undefined;
  onTouchCancel?: string | undefined;
  onTouchEndCapture?: string | undefined;
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
  iconProps: IconProps<IoniconName>;
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

export type NavigatorType = "stack" | "bottom-tab" | "material-bottom-tab";

export interface Screen extends Component {
  url?: string;
  name?: string;
  tabBarIcon?: Ionicon;
  tabBarFocusedIcon?: Ionicon;
}

export interface Navigator extends Component {
  navigatorType: NavigatorType;
  screens?: Screen[];
  headerShown?: boolean;
}

export interface TextInputType extends Component {
  placeholder: string;
}

export interface ListType extends Component {
  orientation: Orientation;
  items: Component[];
}

export interface Image extends Component {
  imageProps?: ImageProps;
  onProgress?: Action | string | undefined;
  onPartialLoad?: Action | string | undefined;
  onLayout?: Action | string | undefined;
  onError?: Action | string | undefined;
  onLoad?: Action | string | undefined;
  onLoadEnd?: Action | string | undefined;
  onLoadStart?: Action | string | undefined;
}

// TODO: add more props
// left?: React.ReactNode;
// right?: React.ReactNode;
export type RNPTextInputProps = TextInputProps & {
  mode?: "flat" | "outlined";
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  error?: boolean;
  selectionColor?: string;
  underlineColor?: string;
  activeUnderlineColor?: string;
  outlineColor?: string;
  activeOutlineColor?: string;
  dense?: boolean;
  multiline?: boolean;
  value?: string;
  style?: StyleProp<TextStyle>;
};

export interface TextInput extends Component {
  textInputProps?: RNPTextInputProps;
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

interface SpinnerType extends Component {
  color?: string | Color;
}

interface ToastType extends Component {
  message: string;
  // TODO figure out duration type
  // duration?: number;
}

interface SnackBarType extends Component {
  message: string;
  action: string;
  duration?: number;
  // visible?: boolean;
  // onDismiss: string;
  // children: Component[];
}

export interface CardType extends Component {
  viewProps?: ViewProps;
  children?: Component[];
  elevation?: number;
}

interface CarouselType extends Component {
  children: Component[];
}

interface ReadMoreTextType extends Component {
  text: string;
  action: string;
  wordLimit: number;
  color?: string | Color;
}

export interface ScrollViewType extends Component {
  orientation: Orientation;
  style?: StyleProp<ViewStyle>;
  items: Component[];
}

export interface Presentation {
  components: Component[];
}
