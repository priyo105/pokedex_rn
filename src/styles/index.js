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

  largeImage: {
    height: 250,
    width: 250,
    alignSelf: 'center',
  },
  spaceAroundView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  flexStart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallText: {
    fontSize: 12,
    fontFamily: 'RobotoCondensed-Bold',
  },

  mediumBoldText: {
    fontSize: 13,
    fontFamily: 'RobotoCondensed-Bold',
    fontWeight: '800',
  },
  flashListDimensions: {
    height: Dimensions.get('screen').height - 250,
    width: Dimensions.get('screen').width,
  },
  basicPaddingAndMargin: {
    padding: 5,
    margin: 5,
  },
  largePaddedCenteredText: {
    fontSize: 35,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'RobotoCondensed-Bold',
  },

  centeredMediumHeaderText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'RobotoCondensed-Bold',
  },
  typeView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  typeTextView: {
    width: 100,
    height: 50,
    borderRadius: 10,
    marginTop: 10,
  },

  centeredWhiteText: {
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontSize: 17,
    fontFamily: 'RobotoCondensed-Bold',
  },
  centeredsmallWhiteText: {
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontSize: 11,
    fontFamily: 'RobotoCondensed-Bold',
  },
  customStatFlex: {
    flex: 0.8,
  },

  abiltiesTextWrapper: {
    width: 80,
    height: 40,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default styles;
