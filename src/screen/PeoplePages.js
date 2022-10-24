import { StyleSheet, View } from 'react-native';
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
        <Pessoas peopleList={this.state.people} navigation={this.props.navigation}></Pessoas>
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