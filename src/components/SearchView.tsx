/* eslint-disable prettier/prettier */

import {View, Text} from 'react-native';
import React from 'react';
import {Pokemon} from '../types/PokeList';

const SearchView = ({pokemon}: {pokemon: Pokemon}) => {
  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
};

export default SearchView;
