import React, { Component }  from 'react';
import { NavigationActions, StackActions }  from 'react-navigation';
import PropTypes  from 'prop-types';
import { View,
        Text,
        TextInput,
        TouchableOpacity,
        StatusBar,
        ActivityIndicator,
        AsyncStorage   
        } from 'react-native';
import  styles from './styles';
import api from 'service/api';

export default class Welcome extends Component{
static navigationOptions = {
    header: null,
};
//navegation é obrigatorio para o funcionamento desta tela
// static PropTypes = {
//         navigation : PropTypes.shape({
//         dispatch: PropTypes.func,
//     }).isRequired,
// };

state = {
    userName: '',
    loading: false,
    errorMessage: null,
}

checkUserExist =  async( userName) =>{
    const user = await api.get(`/users/${userName}`);
    return user;
};
saveUser = async ( userName ) =>{
     await AsyncStorage.setItem( '@githuber:username', userName );
}
signIN =   async () =>{
    const { userName } = this.state;
    
    if( userName.length === 0 )return;
    
    this.setState({ loading: true });
    try{
        
        await this.checkUserExist(userName);
        this.saveUser(userName);
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'User' })],
          });
          this.props.navigation.dispatch(resetAction);

    }catch( err ){
        this.setState({ loading: false, errorMessage: ' O usuário: '+ userName +' não foi localizado!!' });
    }
   
};
    render(){
        return(
            <View style={styles.container}>
 
            <StatusBar barStyle='light-content' />

               <Text style={styles.title}>Bem Vindo</Text>
                <Text style={styles.text}>Para continuar precisamos que você informe seu usuário no github</Text>
                
                { !!this.state.errorMessage && 
                   <Text style={styles.error}>{this.state.errorMessage}</Text>}
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize= "none"
                        autoCorrect={false}
                        placeholder="Digite o usuário"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        value={this.state.userName}
                        onChangeText={userName => this.setState({ userName })}
                    />

                    <TouchableOpacity style={styles.button} onPress={this.signIN}>
                        { this.state.loading
                         ? <ActivityIndicator size="small" color="#FFF" />
                         :<Text style={styles.buttonText}>Entrar</Text>
                        }    
                    </TouchableOpacity>
                </View>

            </View>
        );
    };
}