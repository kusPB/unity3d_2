import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import NumberPad from '../../component/NumberPad/NumberPad';
import {styles} from './styles';
import Appheader from '../../component/AppHeader/appheader';
const SecurityConformPinScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appheader onPress={() => navigation.goBack()} header="Confirm PIN" />
      <NumberPad
        textfield="Repeat a PIN code to continue "
        onbutton={() => navigation.navigate('TabSecurity')}
      />
    </SafeAreaView>
  );
};

export default SecurityConformPinScreen;
