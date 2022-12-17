import React from "react";
import type { Navigator, NavigatorType, Screen } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ScreenImpl from "./Screen";
import IoniconImpl from "./Ionicon";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();

const configureScreenOptions = (
  route: string,
  navigatorType: NavigatorType,
  screens?: Screen[]
) => {
  switch (navigatorType) {
    case "stack":
      return {
        headerShown: true,
      };
    case "material-bottom-tab":
      return {
        tabBarIcon: ({ focused }: { focused: boolean }) => {
          const screen = screens?.find((screen) => screen.name === route);
          if (focused && screen?.tabBarFocusedIcon) {
            return <IoniconImpl {...screen.tabBarFocusedIcon} />;
          }
          if (screen?.tabBarIcon) {
            return <IoniconImpl {...screen.tabBarIcon} />;
          }
          return null;
        },
      };
    case "bottom-tab":
      return {
        tabBarIcon: ({ focused }: { focused: boolean }) => {
          const screen = screens?.find((screen) => screen.name === route);
          if (focused && screen?.tabBarFocusedIcon) {
            return <IoniconImpl {...screen.tabBarFocusedIcon} />;
          }
          if (screen?.tabBarIcon) {
            return <IoniconImpl {...screen.tabBarIcon} />;
          }
          return null;
        },
        headerShown: false,
      };
    default:
      return {};
  }
};

const NavigatorImpl: React.FC<Navigator> = (props: Navigator) => {
  const { navigatorType, screens } = props;

  const [NavigatorType, setNavigatorType] = React.useState<any>(null);

  React.useEffect(() => {
    switch (navigatorType) {
      case "stack":
        setNavigatorType(Stack);
        break;
      case "bottom-tab":
        setNavigatorType(BottomTab);
        break;
      case "material-bottom-tab":
        setNavigatorType(MaterialBottomTab);
        break;
      default:
        setNavigatorType(Stack);
    }
  }, [navigatorType]);

  return NavigatorType ? (
    <NavigatorType.Navigator
      // @ts-ignore
      screenOptions={({ route }) => {
        return configureScreenOptions(route.name, navigatorType, screens);
      }}
    >
      {screens?.map((screen, index) => {
        return (
          <NavigatorType.Screen
            key={index.toString()}
            name={screen.name}
            component={ScreenImpl}
            initialParams={{ url: screen.url }}
          />
        );
      })}
    </NavigatorType.Navigator>
  ) : null;
};

export default NavigatorImpl;
