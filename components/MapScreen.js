import React,{ Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';

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
          {
            key : 2,
            latlng : {
              latitude: 43.471630,
              longitude: -80.541380,
            },
            title : 'Vending machine 2',
            description : 'price : \n quantity : '
          },
          {
            key : 3,
            latlng : {
              latitude: 43.469625,
              longitude: -80.541380,
            },
            title : 'Vending machine 3',
            description : 'price : \n quantity : '
          }
        ]
      }
    }
    render(){
        return(
          <View style={styles.container}>
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
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });