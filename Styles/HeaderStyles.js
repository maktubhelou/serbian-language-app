import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
    header: {
      paddingTop: Metrics.marginHorizontal,
      paddingBottom: Metrics.marginHorizontal,
      backgroundColor: Colors.tertiaryBackgroundColor,
      justifyContent: 'center',
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
      ...Fonts.style.h2,
      color: Colors.primaryBackgroundColor,
  },
});
