import React,{ Component } from 'react';
import { View, StyleSheet,Text,Image } from 'react-native';
import { Header,Icon } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import { db } from '../config';

let itemsRef = db.ref('/vending machines');

export default class MapScreen extends Component{
    constructor(props){
      super(props);
      this.state = {
        markers : []
      }
    }

    handleOnBackButtonPress(){
      this.props.onMapBackButtonPress();
    }

    componentDidMount() {
      itemsRef.on('value',snapshot => {
        let data = snapshot.val();
        let markers = []
        for(let key in data){
          let marker = data[key]
          let newMarker = {
            key : marker.id,
            title : marker.title,
            description : marker.description,
            latlng : {
              latitude : marker.location.latitude,
              longitude : marker.location.longitude
            }
          };
          markers.push(newMarker);
        }
        this.setState({
          markers : [
            ...markers
          ]
        })
      });
    }

    render(){
      const { pinIcon } = this.props;
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