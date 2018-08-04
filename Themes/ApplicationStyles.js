import Metrics from './Metrics'
import Colors from './Colors'
import Fonts from './Fonts'

const ApplicationStyles = {
    screen: {
        mainContainer: {
            flex: 1,
            backgroundColor: Colors.transparent
        }
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
        backgroundColor: Colors.transparent
    },
    text: {
      ...Fonts.style.h2,
      fontFamily: Fonts.type.base,
      fontSize: 32,
    }
}

export default ApplicationStyles