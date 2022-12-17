import { Presentation, Navigator, Ionicon, Color } from "../../lumine";

const Navigation = new Presentation({
    components: [
      new Navigator({
        navigatorType: "stack",
        headerShown: true,
        screens: [
          {
            name: "Home",
            url: "http://localhost:5000/home",
            tabBarIcon: new Ionicon({
              iconProps: {
                name: "home-outline",
                style: {
                  color: Color.WHEAT,
                },
                size: 18,
              },
            }),
            tabBarFocusedIcon: new Ionicon({
              iconProps: {
                name: "home",
                style: {
                  color: Color.WHITE,
                },
                size: 18,
              },
            }),
          },
          {
            name: "News",
            url: "http://localhost:5000/news/1",
            tabBarIcon: new Ionicon({
              iconProps: {
                name: "person-outline",
                style: {
                  color: Color.WHITE,
                },
                size: 18,
              },
            }),
            tabBarFocusedIcon: new Ionicon({
              iconProps: {
                name: "person",
                style: {
                  color: Color.WHITE,
                },
                size: 18,
              },
            }),
          },
        ],
      }),
    ],
  });

export default Navigation;