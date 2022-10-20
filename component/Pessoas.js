import { Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";

const Pessoas = (props) =>{
   
    const {peopleList, navigation} = props;

    const componentPessoas = peopleList.map(people=>{
        const {first, last, title} = people.name;
        const { medium } = people.picture;

        return (
       
            <TouchableOpacity onPress={()=>{navigation.navigate('PeopleDetails')}}>
                <View key={first} style={styles.pessoas}>
                    <Image style={styles.avatar} source={{ uri: medium}}/>
                    <Text style={styles.conteudo}>{title} {first} {last}</Text>
                </View>
            </TouchableOpacity>
        
        );
      });

   return (
    <View style={styles.container}>
        {componentPessoas}
    </View>
    )
};


export default Pessoas;

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
        aspectRatio: 1,
        flex: 1,
        borderRadius: 50,
        marginRight: 15
    },
    conteudo: {
        flex: 5,
        fontSize: 20,
        color: '#bdc1c6'
    }
});

