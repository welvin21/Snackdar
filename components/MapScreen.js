import React,{ Component } from 'react';
import { Dimensions,YellowBox } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { View, StyleSheet,Text,Image } from 'react-native';
import { Header,Icon } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import { db } from '../config';
import findVendingMachine from '../functions/findVendingMachine';

const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = 0.0121;

console.disableYellowBox = true;
let itemsRef = db.ref('/vending machines');

export default class MapScreen extends Component{
    constructor(props){
      super(props);
      this.state = {
        initial : {},
        markers : []
      }
    }

    handleOnBackButtonPress(){
      this.props.onMapBackButtonPress();
    }

    // componentDidMount() {
      
    // }

    componentDidMount(){
      const { category,itemCode } = this.props;
      itemsRef.on('value',snapshot => {
        let data = snapshot.val();
        const markers = findVendingMachine(data,category,itemCode);
        // let markers = []
        // for(let key in data){
        //   let marker = data[key]
        //   let newMarker = {
        //     key : marker.id,
        //     title : marker.title,
        //     description : marker.description,
        //     latlng : {
        //       latitude : marker.location.latitude,
        //       longitude : marker.location.longitude
        //     }
        //   };
        //   markers.push(newMarker);
        // }
        this.setState({
          markers : [
            ...markers
          ]
        })
      });
      Geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            initial: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }});
          },
        (error) => alert(error.message),
        {enableHighAccuracy: false, timeout: 20000}
      );
      this.watchID = Geolocation.watchPosition((position) => {
       this.setState({currentRegion: {
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           latitudeDelta: LATITUDE_DELTA,
           longitudeDelta: LONGITUDE_DELTA,
         }});
 
     })
    }

    render(){
      const { pinIcon } = this.props;
      const { initial } = this.state;
        return(
          <View style={styles.container}>
            <Header style={styles.header}>
                <Icon 
                    name='arrow-back'
                    onPress={()=>{this.handleOnBackButtonPress()}}
                />
                <Text style={{color : '#fff'}}>MY VENDING MACHINE</Text>
            </Header>   
            <MapView
              style={styles.map}
              region={initial}
              showsUserLocation={true}
              showsScale={true}
              minZoomLevel={0}
              maxZoomLevel={20}
            >
              {this.state.markers.map(marker => (
                <Marker
                  key={marker.id}
                  coordinate={marker.location}
                  title={marker.title}
                  description={marker.description}
                >
                  <Image source={pinIcon} style={styles.image}/>
                </Marker>
              ))}
            </MapView>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    position : 'absolute',
    top : 0,
    bottom : 0,
    right : 0,
    left : 0,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    flex : 1
  },
  map: {
    flex : 9,
    position : 'absolute',
    bottom : 0,
    left : 0,
    right : 0,
    top : '10%'
  },
  image: {
    width : 30,
    height : 30
  }
 });