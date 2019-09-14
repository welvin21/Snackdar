import React,{ Component } from 'react';
import { ScrollView,View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import * as dataModule from '../assets/data/Data';

const { Beverages } = dataModule;

export default class ItemsCard extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    onButtonPress(itemCode){
        this.props.onPress(itemCode);
    }

    render(){
        const { category } = this.props;
        return(
            <ScrollView style={styles.scroll}>
                {Beverages.map(beverage => (
                    <TouchableOpacity 
                        style={styles.item}
                        key={beverage.key} 
                        onPress={()=>this.onButtonPress(beverage.itemCode)}
                    >
                        <Image
                            style={styles.image}
                            source={beverage.image}
                        />
                        <Text style={styles.text}>{beverage.itemName}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scroll : {
        flex : 1,
        padding : '20%',
        alignContent : 'center'
    },
    item : {
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        marginVertical : 20,
        borderRadius : 20,
        backgroundColor : '#92d1c7',
    },
    image : {
        margin : 10,
        width : '100%',
        height : undefined,
        aspectRatio : 1/1
    },
    text : {
       fontSize : 30
    }
})