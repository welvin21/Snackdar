import React,{ Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class OptionCard extends Component{
    onButtonPress(category){
        this.props.onPress(category);
    }
    render(){
        const { text } = this.props;
        return(
            <Button 
                buttonStyle={styles.button} 
                title={text}
                onPress={() => this.onButtonPress(text)}
            />
        );
    }
}

const styles = StyleSheet.create({
    button : {
        alignSelf : 'center',
        width : '90%',
        height : 80,
        marginVertical : 10,
        borderRadius : 7.5,
    }
})