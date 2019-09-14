import React,{ Component } from 'react';
import { ScrollView,View,Text,StyleSheet,Image,TouchableOpacity, Alert } from 'react-native';
import { Header,Icon } from 'react-native-elements';
import * as dataModule from '../assets/data/Data';

const { Beverages,Chips,Sweets } = dataModule;

export default class ItemsCard extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    onButtonPress(itemCode){
        this.props.onPress(itemCode);
    }

    handleOnBackButtonPress(){
        this.props.onBackButtonPress();
    }

    render(){
        const { category } = this.props;
        let data = []
        if(category === 'beverages'){data = Beverages}
        else if(category === 'chips'){data = Chips}
        else if(category === 'sweets'){data = Sweets}
        return(
            <View>
                <Header>
                    <Icon 
                        name='arrow-back'
                        onPress={()=>{this.handleOnBackButtonPress()}}
                    />
                    <Text style={{color : '#fff'}}>MY VENDING MACHINE</Text>
                </Header>                
                <ScrollView style={styles.scroll}>
                    {data.map(datum => (
                        <TouchableOpacity 
                            style={styles.item}
                            key={datum.key} 
                            onPress={()=>this.onButtonPress(datum.itemCode)}
                        >
                            <Image
                                style={styles.image}
                                source={datum.image}
                            />
                            <Text style={styles.text}>{datum.itemName}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scroll : {
        flex : 1,
        padding : '20%',
        paddingTop : 10,
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
        textAlign : 'center',
        fontSize : 20,
        padding : 5,
        fontFamily : 'Thonburi',
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
    }
})