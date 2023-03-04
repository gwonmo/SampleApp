import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {
    View
} from 'react-native';
import HeaderButton from './HeaderButton';

function WriteHeader (){
    const navigation = useNavigation();

    const back = () => {
        navigation.pop();
    };

    const save = () => {
        alert('save');
    }

    return (
        <View>
            <HeaderButton 
                name="arrow-back"
                onPress={back}
            />
            <HeaderButton
                name="checkmark"
                onPress={save}
            />
        </View>
    )
    
}

export default WriteHeader;