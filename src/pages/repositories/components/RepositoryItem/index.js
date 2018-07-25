import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const RepositoryItem = ( {repItem} ) => (

    <View style={styles.container}>
        <Text style={styles.repoTitle}>{repItem.full_name} </Text>

        <View style={styles.infoContainer}>
            <View style={styles.info}>
                <Icon name="star" size={12} style={styles.infIcon} />
                <Text style={styles.infoText}>{repItem.stargazers_count} </Text>
            </View>
            <View style={styles.info}>
                <Icon name="code-fork" size={12} style={styles.infIcon} />
                <Text style={styles.infoText}>{repItem.forks_count} </Text>
            </View>
            <View style={styles.info}>
                <Icon name="eye" size={12} style={styles.infIcon} />
                <Text style={styles.infoText}>{repItem.watchers_count} </Text>
            </View>
        </View>

    </View>

);
export default RepositoryItem;