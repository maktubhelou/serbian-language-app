import Metrics from './Metrics'
import Colors from './Colors'
import Fonts from './Fonts'

const ApplicationStyles = {
    screen: {
        mainContainer: {
            flex: 1,
            paddingTop: Metrics.doubleBaseMargin,
            backgroundColor: Colors.secondaryBackgroundColor
        }
    },
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
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    container: {
        flex: 1,
        backgroundColor: Colors.transparent,
    },
    list: {
        marginTop: Metrics.doubleBaseMargin,
        backgroundColor: Colors.transparent
    },
    text: {
      ...Fonts.style.h2,
      fontFamily: Fonts.type.base,
      fontSize: 32,
    }
}

export default ApplicationStyles