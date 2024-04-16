/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {Stat} from '../types/PokemonDetails';
import ProgressBar from 'react-native-progress/Bar';
import {getColorByType, capitalizeFirstLetter} from '../utils/Helpers';
import styles from '../styles';

interface PokeStatsProps {
  stats: Stat[];
  type: string;
}

const PokeStats = ({stats, type}: PokeStatsProps) => {
  return (
    <View style={styles.basicPaddingAndMargin}>
      {stats?.map((stat, index) => (
        <View style={[styles.flexStart, styles.basicPaddingAndMargin]}>
          <Text
            style={[styles.customStatFlex, styles.mediumBoldText]}
            key={index}>
            {capitalizeFirstLetter(stat.stat.name)}
          </Text>
          <Text style={styles.mediumBoldText}> {stat.base_stat}</Text>
          <ProgressBar
            animated={true}
            progress={(stat.base_stat * 0.5) / 100}
            width={200}
            height={20}
            color={getColorByType(type)}
          />
        </View>
      ))}
    </View>
  );
};

export default PokeStats;
