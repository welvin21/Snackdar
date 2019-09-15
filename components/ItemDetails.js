import React,{ Component } from 'react';
import { View,Text,StyleSheet,ScrollView,Dimensions } from 'react-native';
import { Header,Icon,Image } from 'react-native-elements';
import * as dataModule from '../assets/data/Data';

const { VMImages,Icons } = dataModule;

export default class ItemDetails extends Component{
    constructor(props){
        super(props);
        let inven = props.vm.inventories;
        let items = [];
        for(let category in inven){
            for(let itemCode in inven[category]){
                items.push({
                    category,
                    itemCode
                })
            }
        }
        this.state = {
            items : items
        }
    }
    handleOnBackButtonPress(){
        this.props.onBackButtonPress();
    }
    render(){
        const { vm } = this.props;
        const { items } = this.state;
        return(
            <View style={styles.container}>
                <Header>
                    <Icon 
                        name='arrow-back'
                        onPress={()=>{this.handleOnBackButtonPress()}}
                    />
                    <Text style={{color : '#fff'}}>MY VENDING MACHINE</Text>
                </Header>                
                <ScrollView style={styles.scroll}>
                    <View style={styles.border}>
                        <Image 
                            source = {VMImages[vm.id]}
                            style = {styles.image}
                        />
                    </View>
                    <View style={styles.description}>  
                        <Text style={{fontSize : 24}}>{vm.title}</Text>
                        <Text style={{fontSize : 18}}>{vm.description}</Text>
                    </View>
                    <View>
                        <Text style={{fontSize : 14,marginBottom : 15}}>Other items available : </Text>
                        <View style={styles.items}>
                            {items.map(item => 
                                <Image 
                                    source={Icons[item.category][item.itemCode]}
                                    style={{width : 50,height : 50}}
                                />
                            )}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        width : '100%'
    },  
    scroll : {
        padding : '10%',
        paddingTop : 30,
        alignContent : 'center'
    },
    border : {
        borderRadius : 10,
        borderColor : '#1837d6',
        marginBottom : 15
    },
    description : {
        display : 'flex',
        flexDirection : 'column',
        color : '#000',
        marginBottom : 30
    },
    image : {
        width : '100%',
        height : undefined,
        aspectRatio : 1/1
    },
    items : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    }
})