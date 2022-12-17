# lumine-ui

A server-driven UI package for React Native.

<img src="https://avatars.githubusercontent.com/u/110714650?s=400&u=2f269a43530ca5f575f2c3481f87c96400e9a6b1&v=4" width=100 />

## Documentation

Find the documentation of Lumine UI [here](https://lumineui.vercel.app/).

## Installation

### Using lumine-ui template

To create a new react-native (expo) app with lumine-ui, run the following command in a `bash` terminal. 

**Note:** Use git bash to run it on Windows.

```sh
npx create-lumine-app <app_name>
```

### In an existing expo app

To add lumine-ui to an already existing expo app, install the package by using the following command.

```sh
npm install lumine-ui
```

To get started, paste the code below in `App.tsx` file of your expo app.

```js
import { Presentation, PresentationData, NavHost } from "lumine-ui";
import React from "react";

// Replace the url below with your sever URL
const SERVER_URL = "https://raw.githubusercontent.com/Lumine-UI/server-samples/main/counter.json";

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
```

You can run your server locally (for example, at `http://localhost:5000/`) or host it on the web that responds in the format specified by [Lumine UI](https://lumineui.vercel.app/). Once that is done, simply copy your `url` and paste it as `SERVER_URL` in the code above to start using Lumine UI.

This will initialize a react-native (expo) based counter app.

<img width="212" alt="image" src="https://user-images.githubusercontent.com/55179845/208242639-5b4c3663-311a-4356-ad8b-76ed208a01c6.png">

## Server Samples

The server samples required for Lumine UI can be found [here](https://github.com/Lumine-UI/server-samples).

## NOTE

If you want to use lumine for navigation, you need to install `react-native-screens` and `react-native-safe-area-context`. Run the following command in the app's root directory:

```sh
npx expo install react-native-screens react-native-safe-area-context
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
