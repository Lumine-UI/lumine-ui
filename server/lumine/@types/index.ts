import {IoniconName} from './Ionicons';
export {IoniconName};

type Falsy = undefined | null | false;
interface RecursiveArray<T> extends Array<T | ReadonlyArray<T> | RecursiveArray<T>> {}
/** Keep a brand of 'T' so that calls to `StyleSheet.flatten` can take `RegisteredStyle<T>` and return `T`. */
type RegisteredStyle<T> = number & { __registeredStyleBrand: T };
export type StyleProp<T> = T | RegisteredStyle<T> | RecursiveArray<T | RegisteredStyle<T> | Falsy> | Falsy;

/**
 * Flex Prop Types
 * @see https://reactnative.dev/docs/flexbox
 * @see https://reactnative.dev/docs/layout-props
 */

 type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
 export interface FlexStyle {
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around' | undefined;
    alignItems?: FlexAlignType | undefined;
    alignSelf?: 'auto' | FlexAlignType | undefined;
    aspectRatio?: number | undefined;
    borderBottomWidth?: number | undefined;
    borderEndWidth?: number | string | undefined;
    borderLeftWidth?: number | undefined;
    borderRightWidth?: number | undefined;
    borderStartWidth?: number | string | undefined;
    borderTopWidth?: number | undefined;
    borderWidth?: number | undefined;
    bottom?: number | string | undefined;
    display?: 'none' | 'flex' | undefined;
    end?: number | string | undefined;
    flex?: number | undefined;
    flexBasis?: number | string | undefined;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
    flexGrow?: number | undefined;
    flexShrink?: number | undefined;
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
    height?: number | string | undefined;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
    left?: number | string | undefined;
    margin?: number | string | undefined;
    marginBottom?: number | string | undefined;
    marginEnd?: number | string | undefined;
    marginHorizontal?: number | string | undefined;
    marginLeft?: number | string | undefined;
    marginRight?: number | string | undefined;
    marginStart?: number | string | undefined;
    marginTop?: number | string | undefined;
    marginVertical?: number | string | undefined;
    maxHeight?: number | string | undefined;
    maxWidth?: number | string | undefined;
    minHeight?: number | string | undefined;
    minWidth?: number | string | undefined;
    overflow?: 'visible' | 'hidden' | 'scroll' | undefined;
    padding?: number | string | undefined;
    paddingBottom?: number | string | undefined;
    paddingEnd?: number | string | undefined;
    paddingHorizontal?: number | string | undefined;
    paddingLeft?: number | string | undefined;
    paddingRight?: number | string | undefined;
    paddingStart?: number | string | undefined;
    paddingTop?: number | string | undefined;
    paddingVertical?: number | string | undefined;
    position?: 'absolute' | 'relative' | undefined;
    right?: number | string | undefined;
    start?: number | string | undefined;
    top?: number | string | undefined;
    width?: number | string | undefined;
    zIndex?: number | undefined;

    /**
     * @platform ios
     */
    direction?: 'inherit' | 'ltr' | 'rtl' | undefined;
}

export type OpaqueColorValue = symbol & { __TYPE__: 'Color' };
export type ColorValue = string | OpaqueColorValue;
export interface ShadowStyleIOS {
    shadowColor?: ColorValue | undefined;
    shadowOffset?: { width: number; height: number } | undefined;
    shadowOpacity?: number | undefined;
    shadowRadius?: number | undefined;
}

interface PerpectiveTransform {
    perspective: number;
}

interface RotateTransform {
    rotate: string;
}

interface RotateXTransform {
    rotateX: string;
}

interface RotateYTransform {
    rotateY: string;
}

interface RotateZTransform {
    rotateZ: string;
}

interface ScaleTransform {
    scale: number;
}

interface ScaleXTransform {
    scaleX: number;
}

interface ScaleYTransform {
    scaleY: number;
}

interface TranslateXTransform {
    translateX: number;
}

interface TranslateYTransform {
    translateY: number;
}

interface SkewXTransform {
    skewX: string;
}

interface SkewYTransform {
    skewY: string;
}

interface MatrixTransform {
    matrix: number[];
}

export interface TransformsStyle {
    transform?: (
        | PerpectiveTransform
        | RotateTransform
        | RotateXTransform
        | RotateYTransform
        | RotateZTransform
        | ScaleTransform
        | ScaleXTransform
        | ScaleYTransform
        | TranslateXTransform
        | TranslateYTransform
        | SkewXTransform
        | SkewYTransform
        | MatrixTransform
    )[] | undefined;
    /**
     * @deprecated Use matrix in transform prop instead.
     */
    transformMatrix?: Array<number> | undefined;
    /**
     * @deprecated Use rotate in transform prop instead.
     */
    rotation?: number | undefined;
    /**
     * @deprecated Use scaleX in transform prop instead.
     */
    scaleX?: number | undefined;
    /**
     * @deprecated Use scaleY in transform prop instead.
     */
    scaleY?: number | undefined;
    /**
     * @deprecated Use translateX in transform prop instead.
     */
    translateX?: number | undefined;
    /**
     * @deprecated Use translateY in transform prop instead.
     */
    translateY?: number | undefined;
}

/**
 * @see https://reactnative.dev/docs/view#style
 */
 export interface ViewStyle extends FlexStyle, ShadowStyleIOS, TransformsStyle {
    backfaceVisibility?: 'visible' | 'hidden' | undefined;
    backgroundColor?: ColorValue | undefined;
    borderBottomColor?: ColorValue | undefined;
    borderBottomEndRadius?: number | undefined;
    borderBottomLeftRadius?: number | undefined;
    borderBottomRightRadius?: number | undefined;
    borderBottomStartRadius?: number | undefined;
    borderBottomWidth?: number | undefined;
    borderColor?: ColorValue | undefined;
    borderEndColor?: ColorValue | undefined;
    borderLeftColor?: ColorValue | undefined;
    borderLeftWidth?: number | undefined;
    borderRadius?: number | undefined;
    borderRightColor?: ColorValue | undefined;
    borderRightWidth?: number | undefined;
    borderStartColor?: ColorValue | undefined;
    borderStyle?: 'solid' | 'dotted' | 'dashed' | undefined;
    borderTopColor?: ColorValue | undefined;
    borderTopEndRadius?: number | undefined;
    borderTopLeftRadius?: number | undefined;
    borderTopRightRadius?: number | undefined;
    borderTopStartRadius?: number | undefined;
    borderTopWidth?: number | undefined;
    borderWidth?: number | undefined;
    opacity?: number | undefined;
    testID?: string | undefined;
    /**
     * Sets the elevation of a view, using Android's underlying
     * [elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).
     * This adds a drop shadow to the item and affects z-order for overlapping views.
     * Only supported on Android 5.0+, has no effect on earlier versions.
     *
     * @platform android
     */
    elevation?: number | undefined;
}

export type FontVariant = 'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums';
export interface TextStyleIOS extends ViewStyle {
    fontVariant?: FontVariant[] | undefined;
    letterSpacing?: number | undefined;
    textDecorationColor?: ColorValue | undefined;
    textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed' | undefined;
    writingDirection?: 'auto' | 'ltr' | 'rtl' | undefined;
}

export interface TextStyleAndroid extends ViewStyle {
    textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
    includeFontPadding?: boolean | undefined;
}

// @see https://reactnative.dev/docs/text#style
export interface TextStyle extends TextStyleIOS, TextStyleAndroid, ViewStyle {
    color?: ColorValue | undefined;
    fontFamily?: string | undefined;
    fontSize?: number | undefined;
    fontStyle?: 'normal' | 'italic' | undefined;
    /**
     * Specifies font weight. The values 'normal' and 'bold' are supported
     * for most fonts. Not all fonts have a variant for each of the numeric
     * values, in that case the closest one is chosen.
     */
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
    letterSpacing?: number | undefined;
    lineHeight?: number | undefined;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through' | undefined;
    textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed' | undefined;
    textDecorationColor?: ColorValue | undefined;
    textShadowColor?: ColorValue | undefined;
    textShadowOffset?: { width: number; height: number } | undefined;
    textShadowRadius?: number | undefined;
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
    testID?: string | undefined;
}
export interface ImageURISource {
    /**
     * `uri` is a string representing the resource identifier for the image, which
     * could be an http address, a local file path, or the name of a static image
     * resource (which should be wrapped in the `require('./path/to/image.png')`
     * function).
     */
    uri?: string | undefined;
    /**
     * `bundle` is the iOS asset bundle which the image is included in. This
     * will default to [NSBundle mainBundle] if not set.
     * @platform ios
     */
    bundle?: string | undefined;
    /**
     * `method` is the HTTP Method to use. Defaults to GET if not specified.
     */
    method?: string | undefined;
    /**
     * `headers` is an object representing the HTTP headers to send along with the
     * request for a remote image.
     */
    headers?: { [key: string]: string } | undefined;
    /**
     * `cache` determines how the requests handles potentially cached
     * responses.
     *
     * - `default`: Use the native platforms default strategy. `useProtocolCachePolicy` on iOS.
     *
     * - `reload`: The data for the URL will be loaded from the originating source.
     * No existing cache data should be used to satisfy a URL load request.
     *
     * - `force-cache`: The existing cached data will be used to satisfy the request,
     * regardless of its age or expiration date. If there is no existing data in the cache
     * corresponding the request, the data is loaded from the originating source.
     *
     * - `only-if-cached`: The existing cache data will be used to satisfy a request, regardless of
     * its age or expiration date. If there is no existing data in the cache corresponding
     * to a URL load request, no attempt is made to load the data from the originating source,
     * and the load is considered to have failed.
     *
     * @platform ios
     */
    cache?: 'default' | 'reload' | 'force-cache' | 'only-if-cached' | undefined;
    /**
     * `body` is the HTTP body to send with the request. This must be a valid
     * UTF-8 string, and will be sent exactly as specified, with no
     * additional encoding (e.g. URL-escaping or base64) applied.
     */
    body?: string | undefined;
    /**
     * `width` and `height` can be specified if known at build time, in which case
     * these will be used to set the default `<Image/>` component dimensions.
     */
    width?: number | undefined;
    height?: number | undefined;
    /**
     * `scale` is used to indicate the scale factor of the image. Defaults to 1.0 if
     * unspecified, meaning that one image pixel equates to one display point / DIP.
     */
    scale?: number | undefined;
}

export interface ViewPropsAndroid {
    /**
     * Views that are only used to layout their children or otherwise don't draw anything
     * may be automatically removed from the native hierarchy as an optimization.
     * Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.
     */
    collapsable?: boolean | undefined;

    /**
     * Whether this view needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior.
     * The default (false) falls back to drawing the component and its children
     * with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value.
     * This default may be noticeable and undesired in the case where the View you are setting an opacity on
     * has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).
     *
     * Rendering offscreen to preserve correct alpha behavior is extremely expensive
     * and hard to debug for non-native developers, which is why it is not turned on by default.
     * If you do need to enable this property for an animation,
     * consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn't need to be redrawn each frame).
     * If that property is enabled, this View will be rendered off-screen once,
     * saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.
     */
    needsOffscreenAlphaCompositing?: boolean | undefined;

    /**
     * Whether this view should render itself (and all of its children) into a single hardware texture on the GPU.
     *
     * On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale:
     * in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can just be
     * re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.
     */
    renderToHardwareTextureAndroid?: boolean | undefined;

    /**
     * Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.
     */
    focusable?: boolean | undefined;
}

export type TVParallaxProperties = {
    /**
     * If true, parallax effects are enabled.  Defaults to true.
     */
    enabled?: boolean | undefined;

    /**
     * Defaults to 2.0.
     */
    shiftDistanceX?: number | undefined;

    /**
     * Defaults to 2.0.
     */
    shiftDistanceY?: number | undefined;

    /**
     * Defaults to 0.05.
     */
    tiltAngle?: number | undefined;

    /**
     * Defaults to 1.0
     */
    magnification?: number | undefined;

    /**
     * Defaults to 1.0
     */
    pressMagnification?: number | undefined;

    /**
     * Defaults to 0.3
     */
    pressDuration?: number | undefined;

    /**
     * Defaults to 0.3
     */
    pressDelay?: number | undefined;
};

export interface TVViewPropsIOS {
    /**
     * *(Apple TV only)* When set to true, this view will be focusable
     * and navigable using the Apple TV remote.
     *
     * @platform ios
     */
    isTVSelectable?: boolean | undefined;

    /**
     * *(Apple TV only)* May be set to true to force the Apple TV focus engine to move focus to this view.
     *
     * @platform ios
     */
    hasTVPreferredFocus?: boolean | undefined;

    /**
     * *(Apple TV only)* Object with properties to control Apple TV parallax effects.
     *
     * @platform ios
     */
    tvParallaxProperties?: TVParallaxProperties | undefined;

    /**
     * *(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 2.0.
     *
     * @platform ios
     */
    tvParallaxShiftDistanceX?: number | undefined;

    /**
     * *(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 2.0.
     *
     * @platform ios
     */
    tvParallaxShiftDistanceY?: number | undefined;

    /**
     * *(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 0.05.
     *
     * @platform ios
     */
    tvParallaxTiltAngle?: number | undefined;

    /**
     * *(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 1.0.
     *
     * @platform ios
     */
    tvParallaxMagnification?: number | undefined;
}

export interface ViewPropsIOS extends TVViewPropsIOS {
    /**
     * Whether this view should be rendered as a bitmap before compositing.
     *
     * On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children;
     * for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view
     * and quickly composite it during each frame.
     *
     * Rasterization incurs an off-screen drawing pass and the bitmap consumes memory.
     * Test and measure when using this property.
     */
    shouldRasterizeIOS?: boolean | undefined;
}

/**
 * Gesture recognition on mobile devices is much more complicated than web.
 * A touch can go through several phases as the app determines what the user's intention is.
 * For example, the app needs to determine if the touch is scrolling, sliding on a widget, or tapping.
 * This can even change during the duration of a touch. There can also be multiple simultaneous touches.
 *
 * The touch responder system is needed to allow components to negotiate these touch interactions
 * without any additional knowledge about their parent or child components.
 * This system is implemented in ResponderEventPlugin.js, which contains further details and documentation.
 *
 * Best Practices
 * Users can feel huge differences in the usability of web apps vs. native, and this is one of the big causes.
 * Every action should have the following attributes:
 *      Feedback/highlighting- show the user what is handling their touch, and what will happen when they release the gesture
 *      Cancel-ability- when making an action, the user should be able to abort it mid-touch by dragging their finger away
 *
 * These features make users more comfortable while using an app,
 * because it allows people to experiment and interact without fear of making mistakes.
 *
 * TouchableHighlight and Touchable*
 * The responder system can be complicated to use.
 * So we have provided an abstract Touchable implementation for things that should be "tappable".
 * This uses the responder system and allows you to easily configure tap interactions declaratively.
 * Use TouchableHighlight anywhere where you would use a button or link on web.
 */
 export interface GestureResponderHandlers {
    
}

/**
 * @see React.DOMAtributes
 */
 export interface Touchable {
    
}

export interface AccessibilityState {
    /**
     * When true, informs accessible tools if the element is disabled
     */
    disabled?: boolean | undefined;
    /**
     * When true, informs accessible tools if the element is selected
     */
    selected?: boolean | undefined;
    /**
     * For items like Checkboxes and Toggle switches, reports their state to accessible tools
     */
    checked?: boolean | 'mixed' | undefined;
    /**
     *  When present, informs accessible tools if the element is busy
     */
    busy?: boolean | undefined;
    /**
     *  When present, informs accessible tools the element is expanded or collapsed
     */
    expanded?: boolean | undefined;
}

export interface AccessibilityValue {
    /**
     * The minimum value of this component's range. (should be an integer)
     */
    min?: number | undefined;

    /**
     * The maximum value of this component's range. (should be an integer)
     */
    max?: number | undefined;

    /**
     * The current value of this component's range. (should be an integer)
     */
    now?: number | undefined;

    /**
     * A textual description of this component's value. (will override minimum, current, and maximum if set)
     */
    text?: string | undefined;
}

export interface AccessibilityPropsAndroid {
    /**
     * Indicates to accessibility services whether the user should be notified when this view changes.
     * Works for Android API >= 19 only.
     * See http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.
     * @platform android
     */
    accessibilityLiveRegion?: 'none' | 'polite' | 'assertive' | undefined;

    /**
     * Controls how view is important for accessibility which is if it fires accessibility events
     * and if it is reported to accessibility services that query the screen.
     * Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.
     *
     * Possible values:
     *      'auto' - The system determines whether the view is important for accessibility - default (recommended).
     *      'yes' - The view is important for accessibility.
     *      'no' - The view is not important for accessibility.
     *      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.
     */
    importantForAccessibility?: 'auto' | 'yes' | 'no' | 'no-hide-descendants' | undefined;
}

export interface AccessibilityPropsIOS {
    /**
     * A Boolean value indicating whether the accessibility elements contained within this accessibility element
     * are hidden to the screen reader.
     * @platform ios
     */
    accessibilityElementsHidden?: boolean | undefined;

    /**
     * A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.
     * @platform ios
     */
    accessibilityViewIsModal?: boolean | undefined;

    /**
     * https://reactnative.dev/docs/accessibility#accessibilityignoresinvertcolorsios
     * @platform ios
     */
    accessibilityIgnoresInvertColors?: boolean | undefined;
}

export type AccessibilityActionName =
    /**
     * Generated when a screen reader user double taps the component.
     */
    | 'activate'
    /**
     * Generated when a screen reader user increments an adjustable component.
     */
    | 'increment'
    /**
     * Generated when a screen reader user decrements an adjustable component.
     */
    | 'decrement'
    /**
     * Generated when a TalkBack user places accessibility focus on the component and double taps and holds one finger on the screen.
     * @platform android
     */
    | 'longpress'
    /**
     * Generated when a VoiceOver user places focus on or inside the component and double taps with two fingers.
     * @platform ios
     * */
    | 'magicTap'
    /**
     * Generated when a VoiceOver user places focus on or inside the component and performs a two finger scrub gesture (left, right, left).
     * @platform ios
     * */
    | 'escape';

export type AccessibilityActionInfo = Readonly<{
    name: AccessibilityActionName | string;
    label?: string | undefined;
}>;

export type AccessibilityRole =
    | 'none'
    | 'button'
    | 'togglebutton'
    | 'link'
    | 'search'
    | 'image'
    | 'keyboardkey'
    | 'text'
    | 'adjustable'
    | 'imagebutton'
    | 'header'
    | 'summary'
    | 'alert'
    | 'checkbox'
    | 'combobox'
    | 'menu'
    | 'menubar'
    | 'menuitem'
    | 'progressbar'
    | 'radio'
    | 'radiogroup'
    | 'scrollbar'
    | 'spinbutton'
    | 'switch'
    | 'tab'
    | 'tabbar'
    | 'tablist'
    | 'timer'
    | 'list'
    | 'toolbar';


/**
 * @see https://reactnative.dev/docs/accessibility#accessibility-properties
 */
 export interface AccessibilityProps extends AccessibilityPropsAndroid, AccessibilityPropsIOS {
    /**
     * When true, indicates that the view is an accessibility element.
     * By default, all the touchable elements are accessible.
     */
    accessible?: boolean | undefined;

    /**
     * Provides an array of custom actions available for accessibility.
     */
    accessibilityActions?: ReadonlyArray<AccessibilityActionInfo> | undefined;

    /**
     * Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
     * label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
     */
    accessibilityLabel?: string | undefined;

    /**
     * Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.
     */
    accessibilityRole?: AccessibilityRole | undefined;
    /**
     * Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.
     */
    accessibilityState?: AccessibilityState | undefined;
    /**
     * An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.
     */
    accessibilityHint?: string | undefined;
    /**
     * Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars,
     * it contains range information (minimum, current, and maximum).
     */
    accessibilityValue?: AccessibilityValue | undefined;
}


export interface Insets {
    top?: number | undefined;
    left?: number | undefined;
    bottom?: number | undefined;
    right?: number | undefined;
}
/**
 * @see https://reactnative.dev/docs/view#props
 */
export interface ViewProps
    extends ViewPropsAndroid,
        ViewPropsIOS,
        GestureResponderHandlers,
        Touchable,
        AccessibilityProps {
    /**
     * This defines how far a touch event can start away from the view.
     * Typical interface guidelines recommend touch targets that are at least
     * 30 - 40 points/density-independent pixels. If a Touchable view has
     * a height of 20 the touchable height can be extended to 40 with
     * hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}
     * NOTE The touch area never extends past the parent view bounds and
     * the Z-index of sibling views always takes precedence if a touch
     * hits two overlapping views.
     */
    hitSlop?: Insets | undefined;

    /**
     *
     * In the absence of auto property, none is much like CSS's none value. box-none is as if you had applied the CSS class:
     *
     * .box-none {
     *   pointer-events: none;
     * }
     * .box-none * {
     *   pointer-events: all;
     * }
     *
     * box-only is the equivalent of
     *
     * .box-only {
     *   pointer-events: all;
     * }
     * .box-only * {
     *   pointer-events: none;
     * }
     *
     * But since pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes,
     * we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.
     */
    pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto' | undefined;

    /**
     *
     * This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews,
     * most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound.
     * The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).
     */
    removeClippedSubviews?: boolean | undefined;

    style?: StyleProp<ViewStyle> | undefined;

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string | undefined;

    /**
     * Used to reference react managed views from native code.
     */
    nativeID?: string | undefined;
}

export interface TextPropsIOS {
    /**
     * Specifies whether font should be scaled down automatically to fit given style constraints.
     */
    adjustsFontSizeToFit?: boolean | undefined;

    /**
     * Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).
     */
    minimumFontScale?: number | undefined;

    /**
     * When `true`, no visual change is made when text is pressed down. By
     * default, a gray oval highlights the text on press down.
     */
    suppressHighlighting?: boolean | undefined;
}

export interface TextPropsAndroid {
    /**
     * Lets the user select text, to use the native copy and paste functionality.
     */
    selectable?: boolean | undefined;

    /**
     * The highlight color of the text.
     */
    selectionColor?: ColorValue | undefined;

    /**
     * Set text break strategy on Android API Level 23+
     * default is `highQuality`.
     */
    textBreakStrategy?: 'simple' | 'highQuality' | 'balanced' | undefined;

    /**
     * Determines the types of data converted to clickable URLs in the text element.
     * By default no data types are detected.
     */
    dataDetectorType?: null | 'phoneNumber' | 'link' | 'email' | 'none' | 'all' | undefined;

    /**
     * Hyphenation strategy
     */
    android_hyphenationFrequency?:
        | 'normal'
        | 'none'
        | 'full'
        | undefined;
}

// https://reactnative.dev/docs/text#props
export interface TextProps extends TextPropsIOS, TextPropsAndroid, AccessibilityProps {
    /**
     * Specifies whether fonts should scale to respect Text Size accessibility settings.
     * The default is `true`.
     */
    allowFontScaling?: boolean | undefined;

    /**
     * This can be one of the following values:
     *
     * - `head` - The line is displayed so that the end fits in the container and the missing text
     * at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"
     * - `middle` - The line is displayed so that the beginning and end fit in the container and the
     * missing text in the middle is indicated by an ellipsis glyph. "ab...yz"
     * - `tail` - The line is displayed so that the beginning fits in the container and the
     * missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."
     * - `clip` - Lines are not drawn past the edge of the text container.
     *
     * The default is `tail`.
     *
     * `numberOfLines` must be set in conjunction with this prop.
     *
     * > `clip` is working only for iOS
     */
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;

    /**
     * Line Break mode. Works only with numberOfLines.
     * clip is working only for iOS
     */
    lineBreakMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;

    /**
     * Used to truncate the text with an ellipsis after computing the text
     * layout, including line wrapping, such that the total number of lines
     * does not exceed this number.
     *
     * This prop is commonly used with `ellipsizeMode`.
     */
    numberOfLines?: number | undefined;

    /**
     * @see https://reactnative.dev/docs/text#style
     */
    style?: StyleProp<TextStyle> | undefined;

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string | undefined;

    /**
     * Used to reference react managed views from native code.
     */
    nativeID?: string | undefined;

    /**
     * Specifies largest possible scale a font can reach when allowFontScaling is enabled. Possible values:
     * - null/undefined (default): inherit from the parent node or the global default (0)
     * - 0: no max, ignore parent/global default
     * - >= 1: sets the maxFontSizeMultiplier of this node to this value
     */
    maxFontSizeMultiplier?: number | null | undefined;
}

export type StatusBarStyle = 'default' | 'light-content' | 'dark-content';

export type StatusBarAnimation = 'none' | 'fade' | 'slide';

export interface StatusBarPropsIOS {
    /**
     * If the network activity indicator should be visible.
     *
     * @platform ios
     */
    networkActivityIndicatorVisible?: boolean | undefined;

    /**
     * The transition effect when showing and hiding the status bar using
     * the hidden prop. Defaults to 'fade'.
     *
     * @platform ios
     */
    showHideTransition?: null | 'fade' | 'slide' | 'none' | undefined;
}

export interface StatusBarPropsAndroid {
    /**
     * The background color of the status bar.
     *
     * @platform android
     */
    backgroundColor?: ColorValue | undefined;

    /**
     * If the status bar is translucent. When translucent is set to true,
     * the app will draw under the status bar. This is useful when using a
     * semi transparent status bar color.
     *
     * @platform android
     */
    translucent?: boolean | undefined;
}

export interface StatusBarProps extends StatusBarPropsIOS, StatusBarPropsAndroid {
    /**
     * If the transition between status bar property changes should be
     * animated. Supported for backgroundColor, barStyle and hidden.
     */
    animated?: boolean | undefined;

    /**
     * Sets the color of the status bar text.
     */
    barStyle?: null | StatusBarStyle | undefined;

    /**
     * If the status bar is hidden.
     */
    hidden?: boolean | undefined;
}

export type ImageResizeMode = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
export type ImageRequireSource = number;
export type ImageSourcePropType = ImageURISource | ImageURISource[] | ImageRequireSource;

export interface ImageStyle extends FlexStyle, ShadowStyleIOS, TransformsStyle {
    resizeMode?: ImageResizeMode | undefined;
    backfaceVisibility?: 'visible' | 'hidden' | undefined;
    borderBottomLeftRadius?: number | undefined;
    borderBottomRightRadius?: number | undefined;
    backgroundColor?: ColorValue | undefined;
    borderColor?: ColorValue | undefined;
    borderWidth?: number | undefined;
    borderRadius?: number | undefined;
    borderTopLeftRadius?: number | undefined;
    borderTopRightRadius?: number | undefined;
    overflow?: 'visible' | 'hidden' | undefined;
    overlayColor?: ColorValue | undefined;
    tintColor?: ColorValue | undefined;
    opacity?: number | undefined;
}

export interface ImagePropsIOS {
    /**
     * blurRadius: the blur radius of the blur filter added to the image
     * @platform ios
     */
    blurRadius?: number | undefined;

    /**
     * When the image is resized, the corners of the size specified by capInsets will stay a fixed size,
     * but the center content and borders of the image will be stretched.
     * This is useful for creating resizable rounded buttons, shadows, and other resizable assets.
     * More info on Apple documentation
     */
    capInsets?: Insets | undefined;
}

interface ImagePropsAndroid {
    /**
     * The mechanism that should be used to resize the image when the image's dimensions
     * differ from the image view's dimensions. Defaults to auto.
     *
     * 'auto': Use heuristics to pick between resize and scale.
     *
     * 'resize': A software operation which changes the encoded image in memory before it gets decoded.
     * This should be used instead of scale when the image is much larger than the view.
     *
     * 'scale': The image gets drawn downscaled or upscaled. Compared to resize, scale is faster (usually hardware accelerated)
     * and produces higher quality images. This should be used if the image is smaller than the view.
     * It should also be used if the image is slightly bigger than the view.
     */
    resizeMethod?: 'auto' | 'resize' | 'scale' | undefined;

    /**
     * Duration of fade in animation in ms. Defaults to 300
     *
     * @platform android
     */
    fadeDuration?: number | undefined;
}

export interface ImagePropsBase extends ImagePropsIOS, ImagePropsAndroid, AccessibilityProps {
    progressiveRenderingEnabled?: boolean | undefined;

    borderRadius?: number | undefined;

    borderTopLeftRadius?: number | undefined;

    borderTopRightRadius?: number | undefined;

    borderBottomLeftRadius?: number | undefined;

    borderBottomRightRadius?: number | undefined;

    /**
     * Determines how to resize the image when the frame doesn't match the raw
     * image dimensions.
     *
     * 'cover': Scale the image uniformly (maintain the image's aspect ratio)
     * so that both dimensions (width and height) of the image will be equal
     * to or larger than the corresponding dimension of the view (minus padding).
     *
     * 'contain': Scale the image uniformly (maintain the image's aspect ratio)
     * so that both dimensions (width and height) of the image will be equal to
     * or less than the corresponding dimension of the view (minus padding).
     *
     * 'stretch': Scale width and height independently, This may change the
     * aspect ratio of the src.
     *
     * 'repeat': Repeat the image to cover the frame of the view.
     * The image will keep it's size and aspect ratio. (iOS only)
     *
     * 'center': Scale the image down so that it is completely visible,
     * if bigger than the area of the view.
     * The image will not be scaled up.
     */
    resizeMode?: ImageResizeMode | undefined;

    /**
     * The mechanism that should be used to resize the image when the image's dimensions
     * differ from the image view's dimensions. Defaults to `auto`.
     *
     * - `auto`: Use heuristics to pick between `resize` and `scale`.
     *
     * - `resize`: A software operation which changes the encoded image in memory before it
     * gets decoded. This should be used instead of `scale` when the image is much larger
     * than the view.
     *
     * - `scale`: The image gets drawn downscaled or upscaled. Compared to `resize`, `scale` is
     * faster (usually hardware accelerated) and produces higher quality images. This
     * should be used if the image is smaller than the view. It should also be used if the
     * image is slightly bigger than the view.
     *
     * More details about `resize` and `scale` can be found at http://frescolib.org/docs/resizing-rotating.html.
     *
     * @platform android
     */
    resizeMethod?: 'auto' | 'resize' | 'scale' | undefined;

    /**
     * The image source (either a remote URL or a local file resource).
     *
     * This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments.
     * The native side will then choose the best uri to display based on the measured size of the image container.
     * A cache property can be added to control how networked request interacts with the local cache.
     *
     * The currently supported formats are png, jpg, jpeg, bmp, gif, webp (Android only), psd (iOS only).
     */
    source?: ImageSourcePropType;

    /**
     * similarly to `source`, this property represents the resource used to render
     * the loading indicator for the image, displayed until image is ready to be
     * displayed, typically after when it got downloaded from network.
     */
    loadingIndicatorSource?: ImageURISource | undefined;

    /**
     * A unique identifier for this element to be used in UI Automation testing scripts.
     */
    testID?: string | undefined;

    /**
     * Used to reference react managed images from native code.
     */
    nativeID?: string | undefined;

    /**
     * A static image to display while downloading the final image off the network.
     */
    defaultSource?: ImageURISource | number | undefined;
}

export interface ImageProps extends ImagePropsBase {
    /**
     *
     * Style
     */
    style?: StyleProp<ImageStyle> | undefined;
}

export type KeyboardType = 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';
export type KeyboardTypeIOS =
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search';
export type KeyboardTypeAndroid = 'visible-password';
export type KeyboardTypeOptions = KeyboardType | KeyboardTypeAndroid | KeyboardTypeIOS;

export type ReturnKeyType = 'done' | 'go' | 'next' | 'search' | 'send';
export type ReturnKeyTypeAndroid = 'none' | 'previous';
export type ReturnKeyTypeIOS = 'default' | 'google' | 'join' | 'route' | 'yahoo' | 'emergency-call';
export type ReturnKeyTypeOptions = ReturnKeyType | ReturnKeyTypeAndroid | ReturnKeyTypeIOS;

type DataDetectorTypes = 'phoneNumber' | 'link' | 'address' | 'calendarEvent' | 'none' | 'all';

export interface TextInputIOSProps {
    /**
     * enum('never', 'while-editing', 'unless-editing', 'always')
     * When the clear button should appear on the right side of the text view
     */
    clearButtonMode?: 'never' | 'while-editing' | 'unless-editing' | 'always' | undefined;

    /**
     * If true, clears the text field automatically when editing begins
     */
    clearTextOnFocus?: boolean | undefined;

    /**
     * Determines the types of data converted to clickable URLs in the text input.
     * Only valid if `multiline={true}` and `editable={false}`.
     * By default no data types are detected.
     *
     * You can provide one type or an array of many types.
     *
     * Possible values for `dataDetectorTypes` are:
     *
     * - `'phoneNumber'`
     * - `'link'`
     * - `'address'`
     * - `'calendarEvent'`
     * - `'none'`
     * - `'all'`
     */
    dataDetectorTypes?: DataDetectorTypes | DataDetectorTypes[] | undefined;

    /**
     * If true, the keyboard disables the return key when there is no text and automatically enables it when there is text.
     * The default value is false.
     */
    enablesReturnKeyAutomatically?: boolean | undefined;

    /**
     * Determines the color of the keyboard.
     */
    keyboardAppearance?: 'default' | 'light' | 'dark' | undefined;

    /**
     * Provide rules for your password.
     * For example, say you want to require a password with at least eight characters consisting of a mix of uppercase and lowercase letters, at least one number, and at most two consecutive characters.
     * "required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
     */
    passwordRules?: string | null | undefined;

    /**
     * If `true`, allows TextInput to pass touch events to the parent component.
     * This allows components to be swipeable from the TextInput on iOS,
     * as is the case on Android by default.
     * If `false`, TextInput always asks to handle the input (except when disabled).
     */
    rejectResponderTermination?: boolean | null | undefined;

    /**
     * If false, disables spell-check style (i.e. red underlines). The default value is inherited from autoCorrect
     */
    spellCheck?: boolean | undefined;

    /**
     * Give the keyboard and the system information about the expected
     * semantic meaning for the content that users enter.
     *
     * For iOS 11+ you can set `textContentType` to `username` or `password` to
     * enable autofill of login details from the device keychain.
     *
     * For iOS 12+ `newPassword` can be used to indicate a new password input the
     * user may want to save in the keychain, and `oneTimeCode` can be used to indicate
     * that a field can be autofilled by a code arriving in an SMS.
     *
     * To disable autofill, set textContentType to `none`.
     *
     * Possible values for `textContentType` are:
     *
     *  - `'none'`
     *  - `'URL'`
     *  - `'addressCity'`
     *  - `'addressCityAndState'`
     *  - `'addressState'`
     *  - `'countryName'`
     *  - `'creditCardNumber'`
     *  - `'emailAddress'`
     *  - `'familyName'`
     *  - `'fullStreetAddress'`
     *  - `'givenName'`
     *  - `'jobTitle'`
     *  - `'location'`
     *  - `'middleName'`
     *  - `'name'`
     *  - `'namePrefix'`
     *  - `'nameSuffix'`
     *  - `'nickname'`
     *  - `'organizationName'`
     *  - `'postalCode'`
     *  - `'streetAddressLine1'`
     *  - `'streetAddressLine2'`
     *  - `'sublocality'`
     *  - `'telephoneNumber'`
     *  - `'username'`
     *  - `'password'`
     *  - `'newPassword'`
     *  - `'oneTimeCode'`
     *
     */
    textContentType?:
        | 'none'
        | 'URL'
        | 'addressCity'
        | 'addressCityAndState'
        | 'addressState'
        | 'countryName'
        | 'creditCardNumber'
        | 'emailAddress'
        | 'familyName'
        | 'fullStreetAddress'
        | 'givenName'
        | 'jobTitle'
        | 'location'
        | 'middleName'
        | 'name'
        | 'namePrefix'
        | 'nameSuffix'
        | 'nickname'
        | 'organizationName'
        | 'postalCode'
        | 'streetAddressLine1'
        | 'streetAddressLine2'
        | 'sublocality'
        | 'telephoneNumber'
        | 'username'
        | 'password'
        | 'newPassword'
        | 'oneTimeCode'
        | undefined;

    /**
     * If false, scrolling of the text view will be disabled. The default value is true. Only works with multiline={true}
     */
    scrollEnabled?: boolean | undefined;
}

export interface TextInputAndroidProps {
    /**
     * Specifies autocomplete hints for the system, so it can provide autofill. On Android, the system will always attempt to offer autofill by using heuristics to identify the type of content.
     * To disable autocomplete, set `autoComplete` to `off`.
     *
     * *Android Only*
     *
     * Possible values for `autoComplete` are:
     *
     * - `birthdate-day`
     * - `birthdate-full`
     * - `birthdate-month`
     * - `birthdate-year`
     * - `cc-csc`
     * - `cc-exp`
     * - `cc-exp-day`
     * - `cc-exp-month`
     * - `cc-exp-year`
     * - `cc-number`
     * - `email`
     * - `gender`
     * - `name`
     * - `name-family`
     * - `name-given`
     * - `name-middle`
     * - `name-middle-initial`
     * - `name-prefix`
     * - `name-suffix`
     * - `password`
     * - `password-new`
     * - `postal-address`
     * - `postal-address-country`
     * - `postal-address-extended`
     * - `postal-address-extended-postal-code`
     * - `postal-address-locality`
     * - `postal-address-region`
     * - `postal-code`
     * - `street-address`
     * - `sms-otp`
     * - `tel`
     * - `tel-country-code`
     * - `tel-national`
     * - `tel-device`
     * - `username`
     * - `username-new`
     * - `off`
     */
    autoComplete?:
        | 'birthdate-day'
        | 'birthdate-full'
        | 'birthdate-month'
        | 'birthdate-year'
        | 'cc-csc'
        | 'cc-exp'
        | 'cc-exp-day'
        | 'cc-exp-month'
        | 'cc-exp-year'
        | 'cc-number'
        | 'email'
        | 'gender'
        | 'name'
        | 'name-family'
        | 'name-given'
        | 'name-middle'
        | 'name-middle-initial'
        | 'name-prefix'
        | 'name-suffix'
        | 'password'
        | 'password-new'
        | 'postal-address'
        | 'postal-address-country'
        | 'postal-address-extended'
        | 'postal-address-extended-postal-code'
        | 'postal-address-locality'
        | 'postal-address-region'
        | 'postal-code'
        | 'street-address'
        | 'sms-otp'
        | 'tel'
        | 'tel-country-code'
        | 'tel-national'
        | 'tel-device'
        | 'username'
        | 'username-new'
        | 'off'
        | undefined;

    /**
     * Determines whether the individual fields in your app should be included in a
     * view structure for autofill purposes on Android API Level 26+. Defaults to auto.
     * To disable auto complete, use `off`.
     *
     * *Android Only*
     *
     * The following values work on Android only:
     *
     * - `auto` - let Android decide
     * - `no` - not important for autofill
     * - `noExcludeDescendants` - this view and its children aren't important for autofill
     * - `yes` - is important for autofill
     * - `yesExcludeDescendants` - this view is important for autofill but its children aren't
     */
    importantForAutofill?: 'auto' | 'no' | 'noExcludeDescendants' | 'yes' | 'yesExcludeDescendants' | undefined;

    /**
     * When false, if there is a small amount of space available around a text input (e.g. landscape orientation on a phone),
     *   the OS may choose to have the user edit the text inside of a full screen text input mode.
     * When true, this feature is disabled and users will always edit the text directly inside of the text input.
     * Defaults to false.
     */
    disableFullscreenUI?: boolean | undefined;

    /**
     * If defined, the provided image resource will be rendered on the left.
     */
    inlineImageLeft?: string | undefined;

    /**
     * Padding between the inline image, if any, and the text input itself.
     */
    inlineImagePadding?: number | undefined;

    /**
     * Sets the number of lines for a TextInput.
     * Use it with multiline set to true to be able to fill the lines.
     */
    numberOfLines?: number | undefined;

    /**
     * Sets the return key to the label. Use it instead of `returnKeyType`.
     * @platform android
     */
    returnKeyLabel?: string | undefined;

    /**
     * Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced
     * The default value is simple.
     */
    textBreakStrategy?: 'simple' | 'highQuality' | 'balanced' | undefined;

    /**
     * The color of the textInput underline.
     */
    underlineColorAndroid?: ColorValue | undefined;

    /**
     * Vertically align text when `multiline` is set to true
     */
    textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;

    /**
     * When false, it will prevent the soft keyboard from showing when the field is focused. The default value is true
     */
    showSoftInputOnFocus?: boolean | undefined;
}

export interface TextInputProps extends ViewProps, TextInputIOSProps, TextInputAndroidProps, AccessibilityProps {
    /**
     * Specifies whether fonts should scale to respect Text Size accessibility settings.
     * The default is `true`.
     */
    allowFontScaling?: boolean | undefined;

    /**
     * Can tell TextInput to automatically capitalize certain characters.
     *      characters: all characters,
     *      words: first letter of each word
     *      sentences: first letter of each sentence (default)
     *      none: don't auto capitalize anything
     *
     * https://reactnative.dev/docs/textinput#autocapitalize
     */
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;

    /**
     * If false, disables auto-correct.
     * The default value is true.
     */
    autoCorrect?: boolean | undefined;

    /**
     * If true, focuses the input on componentDidMount.
     * The default value is false.
     */
    autoFocus?: boolean | undefined;

    /**
     * If true, the text field will blur when submitted.
     * The default value is true.
     */
    blurOnSubmit?: boolean | undefined;

    /**
     * If true, caret is hidden. The default value is false.
     */
    caretHidden?: boolean | undefined;

    /**
     * If true, context menu is hidden. The default value is false.
     */
    contextMenuHidden?: boolean | undefined;

    /**
     * Provides an initial value that will change when the user starts typing.
     * Useful for simple use-cases where you don't want to deal with listening to events
     * and updating the value prop to keep the controlled state in sync.
     */
    defaultValue?: string | undefined;

    /**
     * If false, text is not editable. The default value is true.
     */
    editable?: boolean | undefined;

    /**
     * enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad',
     * 'decimal-pad', 'twitter', 'web-search', 'visible-password')
     * Determines which keyboard to open, e.g.numeric.
     * The following values work across platforms: - default - numeric - email-address - phone-pad
     * The following values work on iOS: - ascii-capable - numbers-and-punctuation - url - number-pad - name-phone-pad - decimal-pad - twitter - web-search
     * The following values work on Android: - visible-password
     */
    keyboardType?: KeyboardTypeOptions | undefined;

    /**
     * Limits the maximum number of characters that can be entered.
     * Use this instead of implementing the logic in JS to avoid flicker.
     */
    maxLength?: number | undefined;

    /**
     * If true, the text input can be multiple lines. The default value is false.
     */
    multiline?: boolean | undefined;

    /**
     * The string that will be rendered before text input has been entered
     */
    placeholder?: string | undefined;

    /**
     * The text color of the placeholder string
     */
    placeholderTextColor?: ColorValue | undefined;

    /**
     * enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
     * Determines how the return key should look.
     */
    returnKeyType?: ReturnKeyTypeOptions | undefined;

    /**
     * If true, the text input obscures the text entered so that sensitive text like passwords stay secure.
     * The default value is false.
     */
    secureTextEntry?: boolean | undefined;

    /**
     * If true, all text will automatically be selected on focus
     */
    selectTextOnFocus?: boolean | undefined;

    /**
     * The start and end of the text input's selection. Set start and end to
     * the same value to position the cursor.
     */
    selection?: { start: number; end?: number | undefined } | undefined;

    /**
     * The highlight (and cursor on ios) color of the text input
     */
    selectionColor?: ColorValue | undefined;

    /**
     * Styles
     */
    style?: StyleProp<TextStyle> | undefined;

    /**
     * Align the input text to the left, center, or right sides of the input field.
     */
    textAlign?: 'left' | 'center' | 'right' | undefined;

    /**
     * Used to locate this view in end-to-end tests
     */
    testID?: string | undefined;

    /**
     * Used to connect to an InputAccessoryView. Not part of react-natives documentation, but present in examples and
     * code.
     * See https://reactnative.dev/docs/inputaccessoryview for more information.
     */
    inputAccessoryViewID?: string | undefined;

    /**
     * The value to show for the text input. TextInput is a controlled component,
     * which means the native value will be forced to match this value prop if provided.
     * For most uses this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same.
     * In addition to simply setting the same value, either set editable={false},
     * or set/update maxLength to prevent unwanted edits without flicker.
     */
    value?: string | undefined;

    /**
     * Specifies largest possible scale a font can reach when allowFontScaling is enabled. Possible values:
     * - null/undefined (default): inherit from the parent node or the global default (0)
     * - 0: no max, ignore parent/global default
     * - >= 1: sets the maxFontSizeMultiplier of this node to this value
     */
    maxFontSizeMultiplier?: number | null | undefined;
}