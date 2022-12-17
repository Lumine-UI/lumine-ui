import { Presentation, PresentationData, NavHost } from "lumine-ui";
import React from "react";
import {LogBox} from 'react-native'

LogBox.ignoreLogs(['Require cycle:']);

const SERVER_URL = "http://localhost:5000/";

const defaultPresentation: PresentationData = {
  components: [],
};

export default function App() {
  const [presentationData, setPresentationData] =
    React.useState<PresentationData>(defaultPresentation);

  React.useEffect(() => {
    async function init() {
      try {
        const response = await fetch(SERVER_URL);
        const data = await response.json();
        console.log(data);
        setPresentationData(data);
      } catch (error) {
        console.error(error);
      }
    }
    init();
  }, []);
  return (
    <NavHost>
      <Presentation components={presentationData.components} />
    </NavHost>
  );
}
