/* eslint-disable prettier/prettier */
import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';

interface CardProps {
  children: ReactNode;
  color: string;
}

export default function Card({children, color}: CardProps) {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: color ? color : 'white',
      borderRadius: 20,
      padding: 10,
      height: 150,
      width: 150,
      marginVertical: 5,
      elevation: 5,
      shadowColor: '',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
  });

  return <View style={styles.card}>{children}</View>;
}
