import React from "react";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

export const ShiftCalendar = () => {
    const navigation = useNavigation();
    return(
        <Calendar 
            firstDay={1}
            enableSwipeMonths={true}
            onDayPress={day => navigation.navigate('Учет рабочего времени', {shiftDate: day.dateString})}
        />
    );
}