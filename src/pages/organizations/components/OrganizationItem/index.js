import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const OrganizationItem = ( {item} ) => (

    <View style={styles.container}>
           <Image style={styles.avatar} source={{uri:item.avatar_url}} />
        <Text style={styles.title}> {item.login} </Text>

    </View>

);
export default OrganizationItem;