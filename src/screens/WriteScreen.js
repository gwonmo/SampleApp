import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import IncomeWrite from '../components/IncomeWrite';
import WriteHeader from '../components/WriteHeader';

function WriteScreen (){

    const [title, setTitle] = useState('');
    const [inputMoney, setInputMoney] = useState(0);

    return (
        <SafeAreaView>
            <WriteHeader />
            <IncomeWrite 
                title={title}
                onChangeTitle={setTitle}
                inputMoney={inputMoney}
                onChangeInputMoney={setInputMoney}
            />
        </SafeAreaView>

    )
}

export default WriteScreen;