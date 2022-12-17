import { Component, View } from "./types";
import { ViewProps } from "../@types";
import { ComponentType } from "./types";

class ViewImpl implements View {
  type?: ComponentType;
  id?: string | number;
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

  constructor(view: View) {
    this.type = "View";
    this.id = view.id;
    this.viewProps = view.viewProps;
    this.children = view.children;
    this.onLayout = view.onLayout;
    this.onAccessibilityAction = view.onAccessibilityAction;
    this.onStartShouldSetResponder = view.onStartShouldSetResponder;
    this.onMoveShouldSetResponder = view.onMoveShouldSetResponder;
    this.onResponderEnd = view.onResponderEnd;
    this.onResponderGrant = view.onResponderGrant;
    this.onResponderReject = view.onResponderReject;
    this.onResponderMove = view.onResponderMove;
    this.onResponderRelease = view.onResponderRelease;
    this.onResponderStart = view.onResponderStart;
    this.onResponderTerminationRequest = view.onResponderTerminationRequest;
    this.onResponderTerminate = view.onResponderTerminate;
    this.onStartShouldSetResponderCapture =
      view.onStartShouldSetResponderCapture;
    this.onMoveShouldSetResponderCapture = view.onMoveShouldSetResponderCapture;
    this.onAccessibilityEscape = view.onAccessibilityEscape;
    this.onAccessibilityTap = view.onAccessibilityTap;
    this.onMagicTap = view.onMagicTap;
    this.onTouchStart = view.onTouchStart;
    this.onTouchMove = view.onTouchMove;
    this.onTouchEnd = view.onTouchEnd;
    this.onTouchCancel = view.onTouchCancel;
    this.onTouchEndCapture = view.onTouchEndCapture;
  }
}

export default ViewImpl;
