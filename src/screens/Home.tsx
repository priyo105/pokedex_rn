/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <View>
      <Header />
      <SearchBar />
    </View>
  );
};

export default Home;
