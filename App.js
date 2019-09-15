import React,{ Component } from 'react';
import { View,Text,StyleSheet,ScrollView,Fragment,SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import OptionCard from './components/OptionCard';
import ItemsCard from './components/ItemsCard';
import MapScreen from './components/MapScreen';
import ItemDetails from './components/ItemDetails';
import * as dataModule from './assets/data/Data';

const { OptionCards,Icons } = dataModule;

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      page : 0,
      category : null,
      itemCode : null,
      vm : {}
    }
  }

  handleOptionCardOnPress = (category) => {
    this.setState({
      page : this.state.page + 1,
      category : category.toLowerCase()
    });
  }

  handleItemOnPress = (itemCode) => {
    this.setState({
      page : this.state.page + 1,
      itemCode : itemCode.toLowerCase()
    })
  }

  handleBackButtonPress = () => {
    this.setState({
      page : this.state.page - 1,
      category : null,
      itemCode : null
    })
  }
  
  handleMapBackButtonPress = () => {
    this.setState({
      page : this.state.page - 1,
      itemCode : null
    })
  }

  handleLocationPress = (vm) => {
    this.setState({
      page : this.state.page + 1,
      vm
    })
  }

  handleDetailsBackButtonPress = () => {
    this.setState({page : this.state.page - 1})
  }

  render(){
    const { page,category,itemCode,vm } = this.state;
    if(page === 0){
      return(
        <View style={styles.container}>
          <Header
            centerComponent={{ text: 'MY VENDING MACHINE', style : {color : '#fff'} }}
          />
          <ScrollView style={styles.content}>
            {OptionCards.map(Option => 
              <OptionCard 
                text={Option.text} 
                key={Option.key}
                onPress={this.handleOptionCardOnPress.bind(this)}
              />
            )}
          </ScrollView>       
        </View>
      );
    }else if(page === 1){
      return(
        <View style={styles.container}>
          <ItemsCard
            category={category} 
            onPress={this.handleItemOnPress.bind(this)}
            onBackButtonPress={this.handleBackButtonPress.bind(this)}
          />
        </View>
      )
    }else if(page === 2){
      return(
        <MapScreen 
          onMapBackButtonPress={this.handleMapBackButtonPress.bind(this)}
          pinIcon={Icons[category.toLowerCase()][itemCode.toLowerCase()]}
          category={category}
          itemCode={itemCode}
          onPress={this.handleLocationPress.bind(this)}
        />
      )
    }else{
      return(
        <View style={styles.container}>
          <ItemDetails
            vm={vm}
            onBackButtonPress={this.handleDetailsBackButtonPress.bind(this)}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container : {
    alignItems: 'center',
    flex: 1,
    paddingTop : 0,
    // justifyContent: 'center'
  },
  scroll : {
    alignContent : 'center',
    flex: 1,
    paddingTop : 0,

  },
  content : {
    width : '100%',
    alignContent : 'center',
    flex: 1,
    paddingTop : 50,
    // alignItems : 'center'
  }
})