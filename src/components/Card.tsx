import { Card as RNCard } from "react-native-paper";
import type { Card } from "./types";
import { StyleSheet, View as RNView } from "react-native";
import React from "react";
import { Render } from "./Render";

const CardImpl: React.FC<Card> = (props: Card) => {
    const {elevation, viewProps, children, contexts} = props;
    return(
        <RNCard style={styles.container} elevation={elevation} >
            <RNView {...viewProps}>
                {children?.map((child, index) => {
                    const childWithContext = {...child, contexts: contexts};
                    return <React.Fragment key={index.toString()}>
                        <Render component={childWithContext} />
                    </React.Fragment>;
                })}
            </RNView>
        </RNCard>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    }
})

export default CardImpl;
