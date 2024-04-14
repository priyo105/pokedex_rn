/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  searchIcon: {
    height: 20,
    width: 20,
  },
});
