/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import getAllPokemon, {getMorePokemonFromUrl} from '../apis/Api';
import {PokeList} from '../types/PokeList';
import PokeCard from '../components/PokeCard';
import {FlashList} from '@shopify/flash-list';
import styles from '../styles';

const Home: React.FC = () => {
  const [pokeList, setPokeList] = useState<PokeList>();
  const [nextPageUrl, setNextPageUrl] = useState('');
  useEffect(() => {
    getAllPokemon({offset: 0, limit: 20})
      .then(response => {
        setPokeList(response);
        setNextPageUrl(response.next);
      })
      .catch(error => {
        console.error('Error fetching Pokemon:', error);
      });
  }, []);

  const fetchMoreData = async () => {
    try {
      const response = await getMorePokemonFromUrl(nextPageUrl);
      setNextPageUrl(response.next);
      setPokeList(prevState => ({
        ...(prevState as PokeList),
        results: [...(prevState?.results || []), ...response.results],
      }));
    } catch (error) {
      console.error('Error fetching more Pokemon:', error);
    }
  };

  return (
    <View style={[styles.basicPaddingAndMargin]}>
      <Header />
      <SearchBar />
      {pokeList && (
        <View style={styles.flashListDimensions}>
          <FlashList
            data={pokeList.results}
            numColumns={2}
            renderItem={({item}) => <PokeCard pokemon={item} />}
            estimatedItemSize={200}
            onEndReached={fetchMoreData}
            onEndReachedThreshold={0.2}
          />
        </View>
      )}
    </View>
  );
};

export default Home;
