/* eslint-disable prettier/prettier */

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text} from 'react-native';
import Styles from '../styles';

const Header = () => {
  return (
    <SafeAreaView style={Styles.headerPaddings}>
      <Image
        source={require('../../assets/icons/pokeball.png')}
        style={Styles.headerIcon}
      />
      <Text style={Styles.headerText}> Pokédex</Text>
    </SafeAreaView>
  );
};

export default Header;
