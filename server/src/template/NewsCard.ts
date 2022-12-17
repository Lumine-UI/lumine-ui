import { View, Text, Image, Button, Color } from "../../lumine";

const NewsCard = ({ sourceName, author, title, description, url, urlToImage, publishedAt, content }) =>
  new View({
    viewProps: {
      style: {
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 10,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        maxWidth: 600,
      },
    },
    children: [
      new View({
        viewProps: {
          style: {
            height: 200,
            backgroundColor: "#121212",
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
                height: 200,
                width: "100%",
                resizeMode: "cover",
              },
            },
          }),
        ],
      }),
      new View({
        viewProps: {
          style: {
            padding: 10,
          },
        },
        children: [
          new Text({
            textProps: {
              style: {
                fontSize: 16,
                fontWeight: "bold",
              },
            },
            text: title,
          }),
          new Text({
            textProps: {
              style: {
                fontSize: 12,
                color: "#424242",
              },
            },
            text: description,
          }),
        ],
      }),
      new View({
        viewProps: {
          style: {
            padding: 10,
          },
        },
        children: [
          new Button({
            buttonProps: {
              mode: "outlined",
            },
            child: new Text({
              textProps: {
                style: {
                  fontSize: 12,
                  color: Color.PURPLE,
                },
              },
              text: "Read More",
            }),
            onPress: {
              type: "navigateTo",
              params: {
                url,
              },
                screenName: "News",
            },
          }),
        ],
      }),
    ],
  });

export default NewsCard;
