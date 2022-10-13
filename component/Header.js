import { Text, StyleSheet, View} from 'react-native';

const Header = props =>(
    <View style={styles.header}>
        <Text style={styles.Texto}>{ props.title }</Text>
    </View>
        
); 

export default Header;

const styles = StyleSheet.create({
    header: {   
        backgroundColor: '#282829',
        width: 'auto',
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 18
    },
    Texto:{
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold'
    }
});