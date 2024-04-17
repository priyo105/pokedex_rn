/* eslint-disable prettier/prettier */
import {Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from '../styles';
import {capitalizeFirstLetter} from '../utils/Helpers';
import {PokemonDetails} from '../types/PokemonDetails';
import PokeType from './PokeType';
import PokeStats from './PokeStats';
import AbilitiesCard from './AbilitiesCard';
import EvoultionChain from './EvoultionChain';

const PokemonDetailsComponent = ({
  details,
  imageUrl,
}: {
  details: PokemonDetails;
  imageUrl: string;
}) => {
  return (
    <ScrollView>
      <Text style={styles.largePaddedCenteredText}>
        {capitalizeFirstLetter(details?.name)}
      </Text>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.largeImage}
      />
      <PokeType type={details?.types} />

      <AbilitiesCard
        abilities={details?.abilities}
        type={details?.types[0].type.name}
      />

      <PokeStats stats={details?.stats} type={details?.types[0].type.name} />

      <EvoultionChain id={details?.id} />
    </ScrollView>
  );
};

export default PokemonDetailsComponent;
