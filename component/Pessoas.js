import { Text, View, StyleSheet } from "react-native";




const Pessoas = props =>{
   
    const peoples = props.peopleList;

    const componentPessoas = peoples.map(people=>{
        const {first} = people.name;
        const { age } = people.dob
        return (
        <View style={styles.pessoas}>
            <Text style={styles.conteudo} key={first}>{first}</Text>
            <Text style={styles.conteudo}>{age}</Text>
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

        width: 300,
        padding: 5,
        justifyContent: 'center',
        alignItems: "center"
    },
    conteudo: {
        marginRight: 40,
        fontSize: 20,
        color: '#bdc1c6'
    }
});

export default Pessoas;