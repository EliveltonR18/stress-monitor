// Global
import React, { Component, Fragment } from 'react';
import { StyleSheet, View, SafeAreaView , StatusBar, Text } from 'react-native';
import * as _ from 'lodash';
import firebase from 'react-native-firebase';
// Views
import Rectangle from '../assets/Rectangle';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            AsyncStorage.clear();
            firebase.auth().signOut()
            .then(() => {this.props.navigation.navigate('auth')});
        }, 500);
    }

    render() {
        return (
            <Fragment>
                <StatusBar backgroundColor="#87CEFA" />
                <SafeAreaView style={styles.container}>
                    <View >
                        <View style={styles.image}>
                            <Rectangle />
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.welcomeText}>
                                Até mais!
                            </Text>
                        </View>
                    </View>
                </SafeAreaView>
            </Fragment>
        );     
    }
}
const styles = StyleSheet.create({
    container: {
        top: '20%'
    },
    image: {
        alignItems: "center",
        justifyContent: "center"
    },
    welcomeText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 30,
    },
    containerText: {
        alignItems: "center",
        justifyContent: "center",
        top: '30%',
    },
});

export default Home;
