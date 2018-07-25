import React, { Component } from 'react';
import {  View, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class extends Component{

    signOut = async () =>{
        await AsyncStorage.clear();
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Welcome' })],
          });
          this.props.navigation.dispatch(resetAction);
    }
    render(){
        return(
                <TouchableOpacity onPress={this.signOut}>
                    <View style={styles.title}>
                        <Icon name="exchange" size={16} style={styles.icon} />
                    </View>
                </TouchableOpacity>
            
        );
    }
};