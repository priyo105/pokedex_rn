/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  return (
    <View>
      <SearchBar />
      <Text style={{fontFamily: 'RobotoCondensed-Regular'}}>Test</Text>
    </View>
  );
};

export default Home;
