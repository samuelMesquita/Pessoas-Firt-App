import React from "react";
import { View, StyleSheet } from "react-native";
import Perfil from "../../component/Perfil"

export default class PeopleDetails extends React.Component{
    render(){
        const {name, old, perfil, country} = this.props.route.params.user;
        console.log(this.props.route.params.user)
        return(
            <View style={styles.container}>
                <Perfil style={styles.perfilstyle} fotoPerfil={perfil}></Perfil>
            </View>
        );
    };

    
};


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#202124',
        height: 800
      },
      perfilstyle:{
        flex: 0.3,
        justifyContent: 'center'
      }
});