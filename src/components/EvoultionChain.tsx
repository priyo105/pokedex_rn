/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {getEvolutionChain} from '../apis/Api';
import styles from '../styles';
import {capitalizeFirstLetter, extractNumberFromUrl} from '../utils/Helpers';
import {Image} from '@rneui/base';
import {IMAGE_URL} from '../../config';

interface EvolutionChainProps {
  id: number;
}

const EvolutionChain = ({id}: EvolutionChainProps) => {
  const [evolutionData, setEvolutionData] = useState<
    {imageUrl: string | undefined; speciesName: string | undefined}[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const speciesResponse = await getEvolutionChain(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`,
        );
        const evolutionChainUrl = speciesResponse.evolution_chain.url;
        const chainResponse = await getEvolutionChain(evolutionChainUrl);
        const data: {
          imageUrl: string | undefined;
          speciesName: string | undefined;
        }[] = [];
        const chain = chainResponse?.chain;
        if (chain) {
          data.push(extractEvolutionData(chain.species.url));
          chain.evolves_to.forEach(
            (evolution: {species: {url: string}; evolves_to: any[]}) => {
              data.push(extractEvolutionData(evolution.species.url));
              evolution.evolves_to.forEach(
                (subEvolution: {species: {url: string}}) => {
                  data.push(extractEvolutionData(subEvolution.species.url));
                },
              );
            },
          );
        }
        setEvolutionData(data);
      } catch (error) {
        console.error('Error fetching evolution chain:', error);
      }
    };

    fetchData();
  }, [id]);

  const extractEvolutionData = (url: string) => {
    const imageUrl = extractNumberFromUrl(url);
    return {
      imageUrl: imageUrl ? `${IMAGE_URL}${imageUrl}.png` : undefined,
      speciesName: undefined,
    };
  };

  return (
    <View>
      <Text style={styles.centeredMediumHeaderText}>Evolution Chain</Text>
      <View style={styles.spaceAroundView}>
        {evolutionData.map((data, index) => (
          <View key={index}>
            <Image
              source={{uri: data.imageUrl}}
              style={styles.imageContainer}
            />
            <Text>{capitalizeFirstLetter(data.speciesName)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default EvolutionChain;
