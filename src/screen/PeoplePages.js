import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';

import axios from 'axios';

import Pessoas from '../../component/Pessoas';

export default class PeoplePages extends React.Component {

  constructor(props){
    super(props);
    this.state = { people: [] }
  }

  componentDidMount(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=14')
    .then(response =>{
        const { results } = response.data;
        this.setState({
          people: results
        });
    })
  }


  render(){
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Pessoas peopleList={this.state.people} navigation={this.props.navigation}></Pessoas>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#202124',
    height: 1000
  },
  PessoaContainer:{
    flex: 0.3,
    justifyContent: 'center'
  }
});