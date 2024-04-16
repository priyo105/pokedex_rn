/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {Type} from '../types/PokemonDetails';
import styles from '../styles';
import {getColorByType, capitalizeFirstLetter} from '../utils/Helpers';

interface PokeTypeProps {
  type: Type[];
}

const PokeType = ({type}: PokeTypeProps) => {
  return (
    <View style={styles.typeView}>
      {type?.map((item, index) => (
        <View
          key={index}
          style={[
            styles.typeTextView,
            {backgroundColor: getColorByType(item.type.name)},
          ]}>
          <Text style={styles.centeredWhiteText}>
            {' '}
            {capitalizeFirstLetter(item.type?.name)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PokeType;
