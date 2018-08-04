import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: Metrics.section,
      paddingBottom: Metrics.marginVertical,
      paddingLeft: Metrics.marginVertical,
      paddingRight: Metrics.marginVertical,
      backgroundColor: Colors.tertiaryBackgroundColor,
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
  },
  headerText: {
      ...Fonts.style.h1,
      color: Colors.primaryBackgroundColor,
  },
  scoreAndFlag: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flag: {
    width: Metrics.flag.width,
    height: Metrics.flag.height,
    marginLeft: Metrics.marginVertical
  },
  flagShadow: {
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 0.5
  }
});


