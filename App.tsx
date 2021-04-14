import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

type CustomTextProps = {
  toggleText: boolean;
  color?: string;
}

function CustomText({ toggleText, color='green' }: CustomTextProps) {
  return toggleText ?
      <Text  testID={'myText'}  style={{color}}>Open up App.tsx to start working on your app!</Text> :
      <Text  testID={'myText'}  style={{color}}>Open up App.!</Text>
}

export default function App() {

  const [toggleText, setToggleText] = useState(false);
  const [color, setColor] = useState(false);

  function getOnPress() {
    return () => setToggleText(!toggleText);
  }

  return (
    <View style={styles.container}>
      <CustomText toggleText={toggleText} color={'blue'}/>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <StatusBar style="auto"/>
      <Button testID={'myButton'} title={'Press Here'} onPress={getOnPress()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
});


