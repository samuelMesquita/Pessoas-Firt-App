import { Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

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
        paddingBottom: 20
    },
    Texto:{
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold'
    }
});