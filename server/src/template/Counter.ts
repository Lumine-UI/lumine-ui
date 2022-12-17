import { Presentation, Text, View, Button, Color, StatusBar, LumineContextComponent } from "../../lumine";

const Counter: Presentation = new Presentation({
  components: [
    new StatusBar({
      statusBarProps: {
        backgroundColor: "#007aff",
        barStyle: "light-content",
      },
    }),
    new View({
      viewProps: {
        style: {
          backgroundColor: Color.WHITE,
          flex: 1,
        },
      },
      children: [
        new View({
          viewProps: {
            style: {
              backgroundColor: "#007aff",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            },
          },
          children: [
            new Text({
              textProps: {
                style: {
                  color: Color.WHITE,
                  fontSize: 24,
                  fontWeight: "bold",
                  padding: 14,
                  textAlign: "center",
                },
              },
              text: "Lumine",
            }),
          ],
        }),
        new LumineContextComponent({
          name: "CounterContext",
          stateVariables: [
            {
              name: "count",
              value: 0,
            }
          ],
          children: [
            new View({
              viewProps: {
                style: {
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
              children: [
                new Text({
                  textProps: {
                    style: {
                      color: Color.BLACK,
                      fontSize: 36,
                      fontWeight: "bold",
                      padding: 10,
                      textAlign: "center",
                    },
                  },
                  text: "{{CounterContext.count}}",
                }),
                new Button({
                  buttonProps: {
                    style: {
                      margin: 2,
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "row",
                      backgroundColor: "#007aff",
                    },
                    mode: "contained",
                  },
                  onPress: {
                    type: "stateUpdate",
                    stateVariableName: "{{CounterContext.count}}",
                    stateOperation: "(count) => {return count+1;}",
                    // type: "navigateTo",
                    // screenName: "Profile",
                  },
                  child: new Text({
                    textProps: {
                      style: {
                        color: Color.WHITE,
                        fontSize: 12,
                        fontWeight: "bold",
                        padding: 6,
                        textAlign: "center",
                      },
                    },
                    text: "Increase Count",
                  }),
                }),
                new Button({
                  buttonProps: {
                    style: {
                      margin: 2,
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "row",
                      backgroundColor: "#007aff",
                    },
                    mode: "contained",
                  },
                  onPress: {
                    type: "stateUpdate",
                    stateVariableName: "{{CounterContext.count}}",
                    stateOperation: "(count) => {return count-1;}",
                  },
                  child: new Text({
                    textProps: {
                      style: {
                        color: Color.WHITE,
                        fontSize: 12,
                        fontWeight: "bold",
                        padding: 6,
                        textAlign: "center",
                      },
                    },
                    text: "Decrease Count",
                  }),
                }),
              ],
            }),
          ]
        }),
      ],
    }),
  ],
});

export default Counter;
