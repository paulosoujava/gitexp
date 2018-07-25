import React, { Component } from 'react';
import { View, Text , FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from 'service/api';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import styles from './styles';  
import RepositoryItem from './components/RepositoryItem';

export default class Repositories extends Component{
    static navigationOptions = {
        title: "teste",
        tabBarIcon: ( { tintcolor } ) => <Icon name="list-alt" size={20}  color={tintcolor} />
    };

    state = {
        data: [],
        loading: true,
        refresh: false
    }

    componentWillMount(){
        this.loadRepositories();
    }

    loadRepositories = async () =>{
        this.setState({ refresh:true });
        const userName = await AsyncStorage.getItem('@githuber:username');
        const response = await api.get( `/users/${userName}/repos`);
        
        this.setState({ data: response.data, loading: false, refresh: false });
    }
    renderListItem = ({ item }) => (
        <RepositoryItem  repItem={item} />
    );
    renderList = () => (
        <FlatList 
            data={this.state.data}
            keyExtractor={item =>String(item.id)}
            renderItem={this.renderListItem}
            onRefresh={this.loadRepositories}
            refreshing={this.state.refresh}
            
        />
    );

    render(){
        return (
            <View style={styles.container}>
                {this.state.loading
                 ? <ActivityIndicator  style={styles.loading}/>
                 : this.renderList()}
            </View>
        );
    }
}