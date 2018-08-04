import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../Themes'

const flashCard = {
    flex: 1,
    marginTop: Metrics.marginVertical,
    marginRight: Metrics.marginHorizontal,
    width: Metrics.screenWidth / 2,
    height: Metrics.screenHeight / 6,
    backgroundColor: Colors.primaryBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.buttonRadius,
}

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    flashCardLeft: {
        ...flashCard,
    },
    flashCardRight: {
        ...flashCard,
    },
    flashCardList: {
        paddingBottom: Metrics.baseMargin,
        backgroundColor: Colors.secondaryBackgroundColor,
    },
    flashCardText: {
        color: Colors.foregroundText,
        fontSize: Fonts.size.h5,
    }
});