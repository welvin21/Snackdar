import React,{ Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Header,Icon } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import { db } from '../config';

let itemsRef = db.ref('/vending machine');

export default class MapScreen extends Component{
    constructor(props){
      super(props);
      this.state = {
        markers : [
          {
            key : 1,
            latlng : {
              latitude: 43.470630,
              longitude: -80.541380,
            },
            title : 'Vending machine 1',
            description : 'price : \n quantity : '
          },
          // {
          //   key : 2,
          //   latlng : {
          //     latitude: 43.471630,
          //     longitude: -80.541380,
          //   },
          //   title : 'Vending machine 2',
          //   description : 'price : \n quantity : '
          // },
          // {
          //   key : 3,
          //   latlng : {
          //     latitude: 43.469625,
          //     longitude: -80.541380,
          //   },
          //   title : 'Vending machine 3',
          //   description : 'price : \n quantity : '
          // }
        ]
      }
    }

    handleOnBackButtonPress(){
      this.props.onMapBackButtonPress();
    }

    componentDidMount() {
      const { markers } = this.state;
      itemsRef.on('value',snapshot => {
        let data = snapshot.val();
        let newMarker = {
          key : data.id,
          title : data.Title,
          description : 'test firebase connection',
          latlng : {
            longitude : data.Location.longitude,
            latitude : data.Location.latitude
          }
        }
        this.setState({
          markers : [
            ...markers,
            newMarker
          ]
        })
      });
    }

    render(){
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
              region={{
                latitude: 43.470630,
                longitude: -80.541380,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
              {this.state.markers.map(marker => (
                <Marker
                  key={marker.key}
                  coordinate={marker.latlng}
                  title={marker.title}
                  description={marker.description}
                />
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
    width: 400,
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
 });