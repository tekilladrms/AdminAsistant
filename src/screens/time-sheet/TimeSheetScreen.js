import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, ScrollView, DatepickerIOS } from 'react-native';
import { TableData, TableSection } from '../../library/TableSectionComponent';
import { Button, DataTable } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
// import { Date } from '../Components/DateComponent/DateComponent';

import { BACKGROUNDCOLOR, DARKGREYCOLOR } from '../../library/colors';
import { ShiftCalendar } from '../calendar/ShiftCalendar';




  const Shift = {
    date: '2022-02-14',
    employees: []
  }

  
export const TimeSheetScreen = ({route}) => {
  const { shiftDate } = route.params;
  const [date, setDate] = useState(shiftDate);

  const [employees, setEmployees] = useState(getData(date))
  
  function getData(date) {
    const Emp = [
      {
        id: 1,
        name: 'Glebova Ekaterina',
        position: 'администратор',
        subDiv: 'Ресторан',
        startShift: '16:00',
        endShift: '07:00',
        durationShift: 15,
        desc: 'усиление'
      },
      {
        id: 2,
        name: 'Glebova E',
        position: 'официант',
        subDiv: 'Ресторан',
        startShift: '16:00',
        endShift: '07:00',
        durationShift: 15,
        desc: ''
      },
      {
        id: 3,
        name: 'Glebova',
        position: 'официант',
        subDiv: 'Ресторан',
        startShift: '16:00',
        endShift: '07:00',
        durationShift: 15,
        desc: ''
      },
      {
        id: 4,
        name: 'Глебова',
        position: 'мойщица',
        subDiv: 'АХЧ',
        startShift: '16:00',
        endShift: '07:00',
        durationShift: 15,
        desc: 'стажер'
      },
      {
        id: 5,
        name: 'Глебова Е',
        position: 'уборщица',
        subDiv: 'АХЧ',
        startShift: '16:00',
        endShift: '07:00',
        durationShift: 15,
        desc: 'вызов'
      },
      {
        id: 6,
        name: 'Pavshok',
        position: 'Шеф-повар',
        subDiv: 'Кухня',
        startShift: '14:00',
        endShift: '04:00',
        durationShift: 14,
        desc: ''
      },
      {
        id: 7,
        name: 'Гельгорн',
        position: 'повар ГЦ',
        subDiv: 'Кухня',
        startShift: '14:00',
        endShift: '04:00',
        durationShift: 14,
        desc: ''
      },
      {
        id: 8,
        name: 'Алена(не помню фамилию)',
        position: 'Су-шеф, повар ХЦ',
        subDiv: 'Кухня',
        startShift: '14:00',
        endShift: '04:00',
        durationShift: 14,
        desc: ''
      },
      {
        id: 9,
        name: 'Федурин',
        position: 'Звукорежиссер',
        subDiv: 'Звук',
        startShift: '14:00',
        endShift: '04:00',
        durationShift: 14,
        desc: ''
      },
      {
        id: 10,
        name: 'Браун',
        position: 'Охрана',
        subDiv: 'Охрана',
        startShift: '20:00',
        endShift: '06:00',
        durationShift: 10,
        desc: 'Усиление'
      },
      {
        id: 11,
        name: 'Браун',
        position: 'Охрана',
        subDiv: 'Охрана',
        startShift: '20:00',
        endShift: '06:00',
        durationShift: 10,
        desc: 'Усиление'
      },
      {
        id: 12,
        name: 'Браун',
        position: 'Охрана',
        subDiv: 'Охрана',
        startShift: '20:00',
        endShift: '06:00',
        durationShift: 10,
        desc: 'Усиление'
      },
      {
        id: 13,
        name: 'Браун',
        position: 'Мойщица',
        subDiv: 'АХЧ',
        startShift: '20:00',
        endShift: '06:00',
        durationShift: 10,
        desc: 'Усиление'
      },
      {
        id: 14,
        name: 'Браун',
        position: 'Уборщица',
        subDiv: 'АХЧ',
        startShift: '20:00',
        endShift: '06:00',
        durationShift: 10,
        desc: 'Усиление'
      },
      
    ];
    if(Shift.date == date) return Emp;
    else return [];
  }
  
  
  function getFilteredData(subDiv) {
    var tempData = employees.filter(item => item.subDiv == subDiv);
    return tempData;
  }

    const headTable = [ 'Имя', 'Должность', 'Кол-во часов', 'Примечание' ];
    const subDivs = ['Ресторан', 'Кухня', 'АХЧ', 'Охрана', 'Звук'];
    return( 
      <View style={styles.container}>
        {/* <ShiftCalendar /> */}
        <Text style={{color: '#fff', fontSize: 20, textAlign:'center'}}>{date}</Text>
            <DataTable>
              <DataTable.Header style={{ backgroundColor: 'black' }}>
                <DataTable.Title style={{flex: 2}}><Text style={{color: '#fff'}}>Name</Text></DataTable.Title>
                <DataTable.Title style={{flex: 2}}><Text style={{color: '#fff'}}>Должность</Text></DataTable.Title>
                <DataTable.Title style={{flex: 1}}><Text style={{color: '#fff' }}>Часы</Text></DataTable.Title>
                <DataTable.Title style={{flex: 1}}><Text style={{color: '#fff'}}>Прим.</Text></DataTable.Title>
                <DataTable.Title style={{flex: 0.5}}></DataTable.Title>
              </DataTable.Header>
              <ScrollView style={{marginBottom: 100}}  >
              <DataTable.Row style={styles.subDivs}><Text style={styles.subDivRow}>Ресторан</Text></DataTable.Row>
              <TableSection sectionData={getFilteredData('Ресторан')} />
              <DataTable.Row style={styles.subDivs}><Text style={styles.subDivRow}>Кухня</Text></DataTable.Row>
              <TableSection sectionData={getFilteredData('Кухня')}/>
              <DataTable.Row style={styles.subDivs}><Text style={styles.subDivRow}>АХЧ</Text></DataTable.Row>
              <TableSection sectionData={getFilteredData('АХЧ')}/>
              <DataTable.Row style={styles.subDivs}><Text style={styles.subDivRow}>Охрана</Text></DataTable.Row>
              <TableSection sectionData={getFilteredData('Охрана')}/>
              <DataTable.Row style={styles.subDivs}><Text style={styles.subDivRow}>Звук</Text></DataTable.Row>
              <TableSection sectionData={getFilteredData('Звук')}/>
              </ScrollView>
              
            </DataTable>  
          </View>
    )
}



function getDurationShift(startShift, endShift) {
}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: BACKGROUNDCOLOR 
    },
    headStyle: { 
      height: 50,
      
      fontSize: 12,
      color: '#fff',
      
    },
    TableText: { 
      margin: 5,
      color: '#fff',
    },
    dataWrapper: { marginTop: -1 },

    subDivs: {
      flexDirection: 'row', 
      backgroundColor: DARKGREYCOLOR,
      alignItems:'center'
      },

    subDivRow: {
      justifyContent: 'center',
      
      textAlign: 'center', 
      fontSize: 20,
      color: '#fff',
      
      
    },
    
  });