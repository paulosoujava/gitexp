import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import createNavigator from './routes';
import Router from 'routes';

export default class App extends Component{

    state = {
        userChecked: false,
        userLogged: false,
    };
    async componentDidMount(){
        const userName = await AsyncStorage.getItem('@githuber:username');
        this.appLoaded( userName );
    }

    appLoaded = ( userName ) => {
        this.setState({ 
             userChecked: true,
             userLogged: !!userName,  //userName !== null
        });
    }
    render(){

        if( !this.state.userChecked) return null;

        const Router = createNavigator(this.state.userLogged);
        return <Router />;
    };
}
