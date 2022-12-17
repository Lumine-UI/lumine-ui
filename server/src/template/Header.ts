import { View, Text, Color, Ionicon } from "../../lumine";

const Header = (screenName: string, isBackButtonVisible: boolean) => new View({
    viewProps: {
        style: {
            backgroundColor: "#fff",
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            padding: 4,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
    },
    children: [
        isBackButtonVisible && new View({
            viewProps: {
                style: {
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                },
            },
            children: [
                new Ionicon({
                    iconProps: {
                        name: "ios-arrow-back",
                        size: 24,
                        color: Color.BLACK,
                    },
                }),
            ],
        }),
        new Text({
            textProps: {
                style: {
                    color: Color.BLACK,
                    fontSize: 24,
                    fontWeight: "bold",
                    padding: 14,
                    textAlign: "center",
                },
            },
            text: screenName,
        }),
    ],
});

export default Header;