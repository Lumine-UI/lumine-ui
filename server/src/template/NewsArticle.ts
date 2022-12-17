import { Card, Color, Image, Presentation, ScrollViewType, Text, View } from "../../lumine";

const NewsArticle = ({
    source: {
        id,
        name
    },
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content
}) => new Presentation({
  components: [
    new View({
      viewProps: {
        style: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
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
              children: [
                new Image({
                  imageProps: {
                    source: {
                      uri: urlToImage,
                    },
                    style: {
                      height: 400,
                      width: "100%",
                    },
                  },
                }),
                new Text({
                  textProps: {
                    style: {
                      padding: 10,
                      fontSize: 24,
                      fontWeight: "bold",
                      marginTop: 8,
                    },
                  },
                  text: title,
                }),
                new Text({
                  textProps: {
                    style: {
                      alignSelf: "flex-start",
                      fontSize: 18,
                      padding: 10,
                      fontWeight: "200",
                      marginTop: 8,
                    },
                  },
                  text: new Date(publishedAt).toLocaleString(),
                }),
                new Text({
                  textProps: {
                    style: {
                      fontSize: 18,
                      padding: 10,
                      // fontWeight: "bold",
                      marginTop: 8,
                    },
                  },
                  text: description,
                }),
                new Text({
                  textProps: {
                    style: {
                      fontSize: 16,
                      padding: 10,
                      // fontWeight: "bold",
                      marginTop: 8,
                      letterSpacing: 1.2,
                    },
                  },
                  text: content,
                }),
                new Text({
                  textProps: {
                    style: {
                      fontSize: 14,
                      fontWeight: "bold",
                      marginTop: 8,
                    },
                  },
                  text: author,
                }),
                new Text({
                  textProps: {
                    style: {
                      fontSize: 14,
                      fontWeight: "bold",
                      marginTop: 8,
                      marginBottom: 16,
                    },
                  },
                  text: name,
                }), 
              ],
            }),
          ],
        })

      ],
    }),
  ],
});


export default NewsArticle;