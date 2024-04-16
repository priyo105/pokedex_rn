/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 29,
    margin: 2,
    color: 'black',
  },

  headerPaddings: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerIcon: {
    height: 40,
    width: 40,
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  spaceAroundView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  smallText: {
    fontSize: 12,
    fontFamily: 'RobotoCondensed-Bold',
  },
  flashListDimensions: {
    height: Dimensions.get('screen').height - 250,
    width: Dimensions.get('screen').width,
  },
  basicPaddingAndMargin: {
    padding: 5,
    margin: 10,
  },
});

export default styles;
