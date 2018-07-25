import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { colors } from 'styles';
import headerRight from 'components/HeaderRight';

import Welcome from 'pages/welcome';
import Organizations from 'pages/organizations';
import Reposotories from 'pages/repositories';
import HeaderRight from './components/HeaderRight';

const createNavigator = (isLogged = false) => 
    createStackNavigator({
        Welcome:{
            screen: Welcome
        },
        User:{
            screen: createBottomTabNavigator({
                Reposotories : { screen: Reposotories},
                Organizations : { screen: Organizations },
            },{
                tabBarPosition: 'bottom',
                tabBarOptions:{
                    showIcon: true,
                    showLabel: false,
                    activeTintColor: colors.white,
                    inactiveTintColor: colors.whiteTransparent,
                    style:{
                        backgroundColor: colors.secundary
                    }
                    
                }                    
            
            }),
        },

        },{
            initialRouteName: isLogged ? 'User' :  'Welcome',
            navigationOptions: ({ navigation }) => ({
                headerRight: <HeaderRight navigation={navigation}/>,
                title: 'GitHuber'
            }),
    });
export default createNavigator;