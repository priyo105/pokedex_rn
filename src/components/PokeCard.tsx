/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IMAGE_URL} from '../../config';
import {Pokemon} from '../types/PokeList';
import styles from '../styles';
import Card from './CardView';
import {useNavigation} from '@react-navigation/native';
import {Details} from '../constants/navigationConstants';
import {StackNavigation} from '../types/Navigator';

export default function PokeCard({pokemon}: {pokemon: Pokemon | null}) {
  const navigation = useNavigation<StackNavigation>();

  if (!pokemon) {
    return null;
  }

  const pokemonIndex =
    pokemon.url.split('/')[pokemon.url.split('/').length - 2];
  const imageUrl = IMAGE_URL + pokemonIndex + '.png';

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(Details, {url: pokemon.url});
      }}>
      <Card color={'white'}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.imageContainer}
        />

        <View style={[styles.spaceAroundView, {marginTop: 5}]}>
          <Text style={styles.smallText}>No. {pokemonIndex} </Text>
          <Text style={styles.smallText} key={pokemon.name}>
            {' '}
            {pokemon.name.toUpperCase()}{' '}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
