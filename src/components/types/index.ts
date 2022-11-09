import type { ViewProps } from 'react-native';

export type ComponentType =
  | 'Text'
  | 'Button'
  | 'TextInput'
  | 'List'
  | 'View'
  | 'StatusBar'
  | 'Ionicon'
  | 'Screen'
  | 'Navigator'
  | 'LumineContextComponent';

export interface Component {
  type?: ComponentType | string;
  id?: string | number;
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
