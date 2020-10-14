import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View, StyleSheet, StatusBar, Text, TextInput, FlatList } from 'react-native';
import { getCity, getCategories, getCuisine, getRestaurant } from './dispatcher';

import DropDownPicker from 'react-native-dropdown-picker';
import { log } from '../../Utilities/Utility';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SearchRestaurant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            category: {},
            cuisine: {}
        }
        this.props.getCategories()
    }

    getRestaurent = () => {
        log('getRestaurent', this.state.category)
        this.props.getRestaurant(this.props.restaurant.city,this.state.cuisine,this.state.category)
    }

    getCity = () => {
        this.props.getCity(this.state.cityName)
    }

    buttonEnabled = () => {
        return this.state.cityName != '' && typeof this.state.category.label != 'undefined' && typeof this.state.cuisine.label != 'undefined'
    }

    render() {
        // log('this.props.restaurant.categories', this.props.restaurant.categories)
        return (
            <View style={styles.container}>
                {/* <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" animated barStyle={'dark-content'} /> */}
                <Text>Enter City</Text>
                <TextInput
                    allowFontScaling={false}
                    onChangeText={text => this.setState({ cityName: text })}
                    style={{ height: 60, width: '100%', padding: 5, marginTop: 10 }}
                    value={this.state.cityName}
                    style={{ borderWidth: 1 }}
                    onBlur={() => this.getCity()}
                />

                {
                    this.props.restaurant.categories.length > 0 ?
                        <View style={{ marginTop: 10 }}>
                            <Text>Select Category</Text>
                            <DropDownPicker
                                items={this.props.restaurant.categories}
                                containerStyle={{ height: 50 }}
                                style={{ backgroundColor: '#fafafa', borderWidth: 1, marginTop: 5 }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={item => this.setState({
                                    category: item
                                })}
                            />
                        </View>
                        : null
                }

                {
                    this.props.restaurant.cuisine.length > 0 ?
                        <View style={{ marginTop: 10 }}>
                            <Text>Select Cuisine</Text>
                            <DropDownPicker
                                items={this.props.restaurant.cuisine}
                                containerStyle={{ height: 50 }}
                                style={{ backgroundColor: '#fafafa', borderWidth: 1, marginTop: 5 }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={item => this.setState({
                                    cuisine: item
                                })}
                            />
                        </View>
                        : null
                }

                <TouchableOpacity
                    onPress={() => this.getRestaurent()}
                    disabled={!this.buttonEnabled()}
                    style={{
                        marginTop: 20,
                        paddingHorizontal: 20,
                        backgroundColor: this.buttonEnabled() ? 'red' : 'grey',
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                        width: '100%',
                    }}
                >
                    <Text style={{ color: '#ffffff', }}>Get Restaurants</Text>
                </TouchableOpacity>

                {
                    this.props.restaurant.restaurents.length > 0 ?
                        <FlatList
                            data={this.props.restaurant.restaurents}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{paddingVertical:5, borderBottomWidth:1}}>
                                        <Text>Name: {item.restaurant.name}</Text>
                                        <Text>Address: {item.restaurant.location.address}</Text>
                                        <Text>Latitude: {item.restaurant.location.latitude}</Text>
                                        <Text>Longitude: {item.restaurant.location.longitude}</Text>
                                        <Text>Locality: {item.restaurant.location.locality}</Text>
                                        <Text>Average Cost for 2 persons: {item.restaurant.average_cost_for_two}</Text>
                                    </View>
                                );
                            }}
                        />
                        : null
                }
            </View>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        restaurant: state.restaurant,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ getCity, getCategories, getCuisine, getRestaurant }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRestaurant)

const styles = StyleSheet.create({
    container: { flex: 1, margin: 20 },
});