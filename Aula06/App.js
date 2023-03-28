import React from 'react';
import { View, StyleSheet } from 'react-native';
import BotaoProps from './components/BotaoProps.js';

const App = () => {


  return (
    <View style={style.container}>
        <BotaoProps 
        label="0i" 
        corFundo="green"
        msg="Olá"
        />
        <BotaoProps
        label="Ravi" 
        corFundo="blue"
        msg="Boa noite"
        />  
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;