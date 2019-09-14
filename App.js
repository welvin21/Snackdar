import React,{ Component } from 'react';
import { View,Text,StyleSheet,ScrollView,Fragment,SafeAreaView } from 'react-native';
import OptionCard from './components/OptionCard';
import ItemsCard from './components/ItemsCard';
import * as dataModule from './assets/data/Data';

const { OptionCards } = dataModule;

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      category : null,
      itemCode : null
    }
  }

  handleOptionCardOnPress = (category) => {
    this.setState({category : category.toLowerCase()});
  }

  handleItemOnPress = (itemCode) => {
    this.setState({itemCode : itemCode.toLowerCase()})
  }

  render(){
    const { category,itemCode } = this.state;
    if(category === null){
      return(
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>My Vending Machine</Text>
          <View style={styles.content}>
            {OptionCards.map(Option => 
              <OptionCard 
                text={Option.text} 
                key={Option.key}
                onPress={this.handleOptionCardOnPress.bind(this)}
              />
            )}
          </View>       
        </SafeAreaView>
      );
    }else if(itemCode === null){
      return(
        <ScrollView style={styles.scroll}>
          <ItemsCard
            category={category} 
            onPress={this.handleItemOnPress.bind(this)}
          />
        </ScrollView>
      )
    }else{
      return(
        <ScrollView style={styles.scroll}>
          <Text>Hello world</Text>
        </ScrollView>
      )
    }
  }
}

const styles = StyleSheet.create({
  container : {
    alignItems: 'center',
    flex: 1,
    paddingTop : 50,
    // justifyContent: 'center'
  },
  scroll : {
    alignContent : 'center',
    flex: 1,
    paddingTop : 50,

  },
  title : {
    marginBottom : 20,
    fontSize : 24
  },
  content : {
    width : '100%',
    // alignItems : 'center'
  }
})