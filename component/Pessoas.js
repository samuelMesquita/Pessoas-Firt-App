import { Text, View, StyleSheet, Image } from "react-native";

const Pessoas = props =>{
   
    const peoples = props.peopleList;

    const componentPessoas = peoples.map(people=>{
        const {first, last, title} = people.name;
        const { medium } = people.picture;

        return (
        <View key={first} style={styles.pessoas}>
            <Image style={styles.avatar} source={{ uri: medium}}/>
            <Text style={styles.conteudo}>{`${title} ${first} ${last}`}</Text>
        </View>
        );
      });

   return (
    <View style={styles.container}>
        {componentPessoas}
    </View>
    )
};



const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto'
    },
    pessoas: {
        flexDirection: 'row',
        top: 20,
        marginTop: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#FFF',
        height: 60,

        width: 320,
        padding: 5,
        paddingLeft: 20,
        paddingRight:20,
        alignItems: "center"
    },
    avatar:{
        borderRadius: 50,
        height: 45,
        width: 45,
        marginRight: 15
    },
    conteudo: {
        fontSize: 20,
        color: '#bdc1c6'
    }
});

export default Pessoas;