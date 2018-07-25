import { StyleSheet } from 'react-native';
import { metrics, general, colors } from 'styles';

const styles = StyleSheet.create({
   container:{
       ...general.box,
       flex:1,
       alignItems: 'center',
       marginTop: metrics.baseMargin,
       margin:5
   },
   avatar:{
       width:50,
       height:50,
   },
   title:{
       fontWeight: 'bold',
       fontSize: 14,
       marginTop: metrics.baseMargin
   }

});
export default styles;