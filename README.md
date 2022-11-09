# lumine-ui

A cross-platform server-driven UI package for React Native

## Installation

```sh
npm install lumine-ui
```

## Usage

```js
import { View } from 'lumine-ui';

// ...

return <View>...</View>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## For developers

### Setup

```sh
git clone https://github.com/Lumine-UI/lumine-ui.git
cd lumine-ui
```

### Install dependencies of package

```sh
npm install
```

### Prepare the package

```sh
npm run prepare
```

### Pack the package

```sh
npm pack
```

### Installing the package

```sh
cd example
npm install ../lumine-ui-0.0.1.tgz
```

### NOTE
If you want to use lumine for navigation, you need to install `react-native-screens` and `react-native-safe-area-context`. Run the following command:

```sh
npx expo install react-native-screens react-native-safe-area-context
```

### Running the example app

First go to lumine-ui directory and run the following command:

```sh
yarn example web
```


## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
