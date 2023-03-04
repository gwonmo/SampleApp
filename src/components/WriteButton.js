import React from 'react';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    View,
    Pressable,
} from 'react-native';

function WriteButton (){
    const navigation = useNavigation();
    const gotoWrite = () => {
        navigation.navigate('Write')
    }
    
    return (
        <View>
            <Pressable onPress={gotoWrite}>
                <Icon name="pluscircle" size={32} color="#54b9ed"></Icon>
            </Pressable>
        </View>
    )
    
}

export default WriteButton;