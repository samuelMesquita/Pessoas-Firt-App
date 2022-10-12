import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import axios from 'axios';

import Header from './component/Header';
import Pessoas from './component/Pessoas';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { people: [] }
  }

  componentDidMount(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=8')
    .then(response =>{
        const { results } = response.data;
        this.setState({
          people: results
        });
    })
  }


  render(){
    return (
      <View style={styles.container}>
        <Header title="People" style={styles.header}></Header>
        <Pessoas peopleList={this.state.people}></Pessoas>
      </View>
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