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

const url = 'https://628c8a38a3fd714fd034114b.mockapi.io/ibeacon';
const dat = {
  id: "1",
  uuid: '1212121212',
  power: 10,
};



const getResourse = async (url) => { //функция для получения из БД //чтение данных - ПОЛУЧУЧЕНИЕ ДАННЫХ
  console.log('ПРОЧИТКА!');

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибака по адресу ${url}, стутус ошибки ${response.status}`)
  }
  return await response.json();
};

const sendData = async (url, data) => { // рабочая отправка
  console.log('ОТПРАВКА!');
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(res => console.log(res));


  // if (!response.ok) { // нету объекта ок в объекте репонсе в данном случае в мокАПИ
  //       throw new Error(`Ошибака по адресу ${url}, стутус ошибки ${response.status}`)
  // }
  // console.log('функция отправкиииии???????????');
  // return await response.json();
};


const id = 3;
const delData = async (id) => { // рабочая отправка
  console.log('УДАЛЕНИЕ!');
  
  await fetch('https://628c8a38a3fd714fd034114b.mockapi.io/ibeacon/' + id, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))
};









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
          onPress={() => sendData(url, dat)}
          title="ОТПРАВИТЬ!"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          onPress={() => getResourse('https://628c8a38a3fd714fd034114b.mockapi.io/ibeacon').then((data) => console.log(data))}
          title="ПРОЧИТАТЬ!"
          color="#001584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          onPress={() => delData('https://628c8a38a3fd714fd034114b.mockapi.io/ibeacon').then((data) => console.log(data))}
          title="УДАЛЕНИЕ!"
          color="#007784"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '10000',
    color: 1,

  },
});

export default App;
