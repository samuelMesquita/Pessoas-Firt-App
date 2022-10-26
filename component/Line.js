import { View, Text, StyleSheet } from "react-native";


const Line = props =>{
    return(
        <View key={props.valor} style={styles.lineContainer}>
            <Text style={[styles.TitleList, styles.TextStyles]}>{`${props.chave}:`}</Text>
            <Text style={styles.TextStyles}>{props.valor}</Text>
        </View>
    );
}

export default Line;

const styles = StyleSheet.create({
     TextStyles:{
        color: '#FFFFFF',
        fontSize: 15
    },
    TitleList:{
        fontWeight: 'bold',
        marginRight: 5
    },
    lineContainer:{
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 7,
        backgroundColor: '#202124',
        padding: 10,
        borderRadius: 3
    }
});