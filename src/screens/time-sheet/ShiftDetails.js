import React, { useState, useCallback } from "react";
import { TouchableOpacity, TouchableOpacityBase, TouchableOpacityComponent, View } from "react-native";
import { Button, Text, Divider, IconButton } from "react-native-paper";
import { BACKGROUNDCOLOR, DARKGREYCOLOR } from "../../library/colors";
import { useNavigation } from '@react-navigation/native';
import { TitleText } from "../../library/Title-textComponent";
import { TimePickerModal } from 'react-native-paper-dates';


export const Details = ({ route }) => {
    const { itemName, itemPosition, itemDurationShift, itemDesc, itemStartShift, itemEndShift } = route.params;
    const navigation = useNavigation();

    const [visible, setVisible] = useState(false)
    const onDismiss = useCallback(() => {
        setVisible(false)
    }, [setVisible])

  const onConfirm = useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      console.log({ hours, minutes });
    },
    [setVisible]
  );
    return (
        <View style={{ flex: 1, backgroundColor: BACKGROUNDCOLOR, color: '#fff' }}>
          <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={24} // default: current hours
        minutes={0} // default: current minutes
        label="Выбрать время" // optional, default 'Select time'
        uppercase={false} // optional, default is true
        cancelLabel="Отмена" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        animationType="fade" // optional, default is 'none'
        locale="ru" // optional, default is automically detected by your system
      />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: DARKGREYCOLOR }}>
                <Button color={'lightgreen'}>Сохранить</Button>
                <Button color={'#fff'} onPress={() => {navigation.goBack()}}>Отмена</Button>
                <Button color={'red'}>Удалить</Button>
            </View>

            <TitleText title={'Имя:'} text={itemName} />

            <TitleText title={'Должность:'} text={itemPosition} />

            <TouchableOpacity onPress={() => {setVisible(true)}}>
              <TitleText title={'Начало смены:'} text={itemStartShift} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {setVisible(true)}}>
              <TitleText title={'Конец смены:'} text={itemEndShift} />
            </TouchableOpacity>

            <TitleText title={'Количество часов:'} text={itemDurationShift} />

            <TitleText title={'Дополнение:'} text={itemDesc} />

            <Divider />
            {/* {реализовать timepicker} */}
            

            
        </View>
    );
}