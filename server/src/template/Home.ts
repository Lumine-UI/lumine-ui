import { Color, Presentation, Text, View, ScrollViewType, StatusBar } from "../../lumine";
import NewsCard from "./NewsCard";

const Home = (articles: any[]) => new Presentation({
  components: [
    new StatusBar({
      statusBarProps: {
        barStyle: "dark-content",
      }
    }),
    new View({
      viewProps: {
        style: {
          flex: 1,
        },
      },
      children: [
        new ScrollViewType({
          orientation: "vertical",
          items: [
            new View({
              viewProps: {
                style: {
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
              children: articles.map((article: any, index: number) => NewsCard({...article, sourceName: article.source.name, url: "http://localhost:5000/news/" + index}))
            }),
          ],
        }),
      ],
    }),
  ],
});

export default Home;
