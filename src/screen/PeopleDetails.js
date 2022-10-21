import React from "react";
import { View, Text } from "react-native";

export default class PeopleDetails extends React.Component{
     constructor(props){
        super(props);
        const {name, old, perfil, country} = props;

        const people = {
            fullName: name,
            old: old,
            uriPerfil: perfil,
            country: country
        };
     }
    render(){
        console.log(this.people);
        return(
            
            <View>
                <Text>Eu sou a People Details!!!</Text>
            </View>
        );
    };

    
};