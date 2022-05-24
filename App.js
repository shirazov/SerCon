/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';






const getResourse = async (url) => { //функция для получения из БД //чтение данных - ПОЛУЧУЧЕНИЕ ДАННЫХ

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Ошибака по адресу ${url}, стутус ошибки ${response.status}`)
  }

  return await response.json();

};






const sendData = async (url, data) => {
  console.log('функция отправкиииии');
  const response = await fetch(url, {
    metod: 'POST',
    body: data,
  });

  if (!response.ok) {
    throw new Error(`Ошибака по адресу ${url}, стутус ошибки ${response.status}`)
  }
  console.log('функция отправкиииии???????????');
  return await response.json();
};

const dat = {
  id: "wwwwwww",
  uuid: '1212121212',
  power: 10,
}






const beac = JSON.stringify(dat);
sendData('https://628c8a38a3fd714fd034114b.mockapi.io/ibeacon').then((beac) => console.log(beac))




const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={styles.highlight} >
        <Text>Привет!</Text>
        <Button
          onPress={()=>sendData('https://628c8a38a3fd714fd034114b.mockapi.io/ibeacon', beac).then((beac) => console.log(beac))}
          title="ОТПРАВИТЬ!"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={()=>getResourse('https://628c8a38a3fd714fd034114b.mockapi.io/ibeacon').then((data) => console.log(data))}
          title="ПРОЧИТАТЬ!"
          color="#001584"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '10000',
    color: 1
  },
});

export default App;
