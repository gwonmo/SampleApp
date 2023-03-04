import React from 'react';
import {
    View,
    TextInput
} from 'react-native';

function IncomeEditor ({title, onChangeTitle, inputMoney, onChangeInputMoney}){
    
    return (
        <View>
            <TextInput 
                value={title}
                onChangeText={onChangeTitle}
                placeholder="내역"
            />
            <TextInput 
                value={inputMoney}
                onChangeText={onChangeInputMoney}
                placeholder="금액을 입력하세요."
            />
        </View>
    )
    
}

export default IncomeEditor;