import React, {useMemo, useState} from 'react';
import {format} from 'date-fns';
import {
    View,
    Text,
} from 'react-native';
import CalendarView from '../components/CalendarView';
import MoneyDetail from '../components/MoneyDetail';
import WriteButton from '../components/WriteButton';



function MonthScreen (){
    const [selectedDate, setSeletedDate] = useState(
        format(new Date(), 'yyyy-MM-dd'),
    );

    return (
        <View>
            <MoneyDetail />
            <CalendarView
                selectedDate={selectedDate}
                onSelectDate={setSeletedDate}
            />
            <WriteButton />
        </View>
    )
    
}

export default MonthScreen;