import { ScrollView as RNScrollView } from "react-native";
import type { ScrollView } from "./types";
import React from "react";
import { Render } from "./Render";

const ScrollViewImpl: React.FC<ScrollView> = (props: ScrollView) => {
    const { orientation, items, contexts, style } = props
    return (
        <RNScrollView horizontal={orientation === 'horizontal' ? true : false} style={style}>
            {items?.map((child, index) => {
                const childWithContext = { ...child, contexts: contexts };
                return <React.Fragment key={index.toString()}>
                    <Render component={childWithContext} />
                </React.Fragment>;
            })}
        </RNScrollView>
    )
}
export default ScrollViewImpl;