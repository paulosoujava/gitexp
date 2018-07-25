import { StyleSheet } from 'react-native';
import { metrics, general, colors } from 'styles';

const styles = StyleSheet.create({
   container:{
       ...general.box,
       marginHorizontal: metrics.basePadding,
       marginTop: metrics.baseMargin,
   },
   repoTitle:{
       fontWeight: 'bold',
       fontSize: 14,
   },
   infoContainer:{
       flexDirection: 'row',
       marginTop: metrics.baseMargin
   },
   info: {
       flexDirection: 'row',
       marginRight: metrics.baseMargin,
       alignItems: 'center'
   },
   infoIcon:{
       color: colors.dark
   },
   infoText:{
       marginLeft: metrics.baseMargin / 2,
        fontSize: 14,
        color: colors.dark
   }

});
export default styles;