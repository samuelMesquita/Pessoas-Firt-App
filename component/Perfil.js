import { View, StyleSheet, Image, Text } from "react-native";



const Perfil = (props)=>{
    console.log(props);
    return(
        <View style={styles.container}>
            <Image style={styles.foto} source={{ uri: props.fotoPerfil}} />
        </View>
    );

}

export default Perfil;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto'
      },
      foto:{
        marginTop: 20,
        flex: 1,
        borderRadius: 50
    }
});