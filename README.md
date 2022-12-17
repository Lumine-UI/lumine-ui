# lumine-ui

A cross-platform server-driven UI package for React Native.

## Documentation

Find the documentation of Lumine UI [here](https://lumineui.vercel.app/).

## Installation

Install the package by using the following command.

```sh
npm install lumine-ui
```

## Usage

To get started, past the code below in `App.tsx` file of your expo app.

```js
import { Presentation, PresentationData, NavHost } from "lumine-ui";
import React from "react";

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

### NOTE

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
