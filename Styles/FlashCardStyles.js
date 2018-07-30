import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../Themes'

const flashCard = {
    flex: 1,
    marginTop: Metrics.marginVertical,
    marginRight: Metrics.marginHorizontal,
    width: Metrics.screenWidth / 2,
    height: Metrics.screenHeight / 8,
    backgroundColor: Colors.primaryBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.buttonRadius,
}

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    flashCardLeft: {
        ...flashCard,
        marginLeft: Metrics.marginHorizontal,
    },
    flashCardRight: {
        ...flashCard,
    },
    flashCardList: {
        paddingTop: Metrics.baseMargin,
        paddingBottom: Metrics.baseMargin,
        backgroundColor: Colors.secondaryBackgroundColor,
    },
    flashCardText: {
        color: Colors.foregroundText,
        fontSize: Fonts.size.h5,
    }
});