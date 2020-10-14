import React, { Component } from 'react';

import { View, StyleSheet, StatusBar,Text } from 'react-native';
import { screens } from '../../Utilities/Constants';
import { navigateToScreen } from '../../Utilities/Utility';

export default class Splash extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            navigateToScreen(screens.SEARCH, null)
        }, 2000)
    }

    render() {

        return (
            <View style={styles.container}>
                {/* <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" animated barStyle={'dark-content'} /> */}
                <Text>Zomato Demo</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});