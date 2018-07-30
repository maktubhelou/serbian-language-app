import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  centered: {
    justifyContent: 'center',
  },
  text: {
    fontSize: Fonts.size.h2,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
    backgroundColor: Colors.secondaryBackgroundColor,
    color: Colors.foregroundText,
    textAlign: 'center'
  }
});
