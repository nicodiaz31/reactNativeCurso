import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { View } from './components/Themed';
import ButtonComponent from './components/button';
import { StyleSheet } from 'react-native';
import FirstScreen from './screens/firstScreen';
import SecondScreen from './screens/secondScreen';
import { useState } from 'react';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [page, setPage] = useState(0);
  const [name, setName] = useState('');

  const changePage = () => {
    if(page === 0) setPage(1)
    else setPage(0)
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (

      <>
        {
          page === 0 ? <FirstScreen setName={setName} changePage={changePage}/> : <SecondScreen name={name} changePage={changePage}/>
        }
      </>

    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})
