import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    score: {
        ...Fonts.style.h6,
        color: Colors.tertiaryBackgroundColor
    },
    container: {
        height: 40,
        width: 40,
        backgroundColor: Colors.primaryBackgroundColor,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});