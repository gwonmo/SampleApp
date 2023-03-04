import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Pressable,
    Text
} from 'react-native';

function HeaderButton ({name,onPress}){

    return (
        <View>
            <Pressable onPress={onPress}>
                <Icon name={name} size={24}></Icon>
            </Pressable>
        </View>
    )
    
}

export default HeaderButton;