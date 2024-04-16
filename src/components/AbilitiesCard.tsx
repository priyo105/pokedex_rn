/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {Ability} from '../types/PokemonDetails';
import styles from '../styles';
import {getRandomColor, capitalizeFirstLetter} from '../utils/Helpers';

interface AbilitiesProps {
  abilities: Ability[];
  type: string;
}

const AbilitiesCard = ({abilities}: AbilitiesProps) => {
  return (
    <View>
      <Text style={styles.centeredMediumHeaderText}> Abilities</Text>
      <View style={styles.spaceAroundView}>
        {abilities?.map((ability, index) => (
          <View
            style={[
              styles.abiltiesTextWrapper,
              {backgroundColor: getRandomColor()},
            ]}
            key={index}>
            <Text style={styles.centeredsmallWhiteText}>
              {' '}
              {capitalizeFirstLetter(ability.ability.name)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AbilitiesCard;
