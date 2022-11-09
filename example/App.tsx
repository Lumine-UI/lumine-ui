import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'lumine-ui';
import { ComponentType, TextType, ButtonType } from 'lumine-ui';

const t: TextType = {
  type: 'Text',
  text: 'John China',
  textProps: {
    style: {
      fontSize: 48,
      color: 'white',
      fontWeight: 'bold',
    },
  },
};

const b: ButtonType = {
  type: 'Button',
  buttonProps: {
    mode: 'contained',
  },
  child: t
};

export default function App() {
  return (
    <View viewProps={{
      style: styles.container
    }}
    children={[
      b as ComponentType
    ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
});
