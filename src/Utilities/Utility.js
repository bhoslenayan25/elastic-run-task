import NetInfo from '@react-native-community/netinfo';
import { navigationRef } from '../Navigation/RootNavigator'
export const log = (TAG, message) => {
    if (__DEV__) {
        console.log(TAG, message);
    }
}

export const networkAvailable = () => new Promise((resolve, reject) =>
    NetInfo.fetch().then(state => state.isConnected ? resolve(true) : resolve(false)))


export const navigateToScreen = (screenName, props) => {
    navigationRef.current?.navigate(screenName, props)
};