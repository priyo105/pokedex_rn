/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPokemonDetails} from '../apis/Api';
import {PokemonDetails} from '../types/PokemonDetails';
import {IMAGE_URL} from '../../config';
import PokemonDetailsComponent from '../components/PokemonDetailsComponent';

export default function PokeDetails({route}: any) {
  const {url} = route.params;
  const [details, setDetails] = useState<PokemonDetails>();
  const pokemonIndex = url.split('/')[url.split('/').length - 2];

  const imageUrl = IMAGE_URL + pokemonIndex + '.png';

  useEffect(() => {
    getPokemonDetails(url).then(res => setDetails(res));
  }, [url]);

  return (
    <View>
      <PokemonDetailsComponent details={details} imageUrl={imageUrl} />
    </View>
  );
}
