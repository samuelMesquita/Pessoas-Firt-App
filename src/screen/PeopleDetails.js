import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import Line from "../../component/Line";

export default class PeopleDetails extends React.Component{
    render(){

        const {
            perfil,
            email,
            phone,
            cell,
            nat,
            city,
            state
        } = this.props.route.params.user;
        
        return(
            <View style={styles.container}>
                <Image style={styles.foto} source={{ uri: perfil}}/>
                <View style={styles.ListaDadosUsuario}>
                    <Line chave="Email" valor={email}></Line>
                    <Line chave="Cidade" valor={city}></Line>
                    <Line chave="Estado" valor={state}></Line>
                    <Line chave="Telefone" valor={phone}></Line>
                    <Line chave="Celular" valor={cell}></Line>
                    <Line chave="Nacionalidade" valor={nat}></Line>
                </View>
            </View>
        );
    };

    
};


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#202124',
        height: 800,
        padding: 15
      },
    perfilstyle:{
        flex: 0.3,
        justifyContent: 'center'
    },
    foto:{
        aspectRatio: 1,
        borderRadius: 500
    },
    ListaDadosUsuario:{
        marginTop: 15,
        backgroundColor: '#424242',
        borderColor: '#2c2c2c',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    }
});