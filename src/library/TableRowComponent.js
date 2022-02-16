import React from "react";
import { StyleSheet, Text} from "react-native";
import { Button, DataTable, IconButton, Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const TableRow = (props) => {
    const navigation = useNavigation();
    return (
        
        <DataTable.Row style={{ }} key={props.item.key} 
            onPress={() => navigation.navigate('Details', {
                itemId: props.item.id,
                itemName: props.item.name,
                itemPosition: props.item.position,
                itemDurationShift: props.item.durationShift,
                itemDesc: props.item.desc,
                itemStartShift: props.item.startShift,
                itemEndShift: props.item.endShift
        })}
            
            > 
            <DataTable.Cell style={{flex: 2}}><Text style={styles.cellText}>{props.item.name}</Text></DataTable.Cell>
            <DataTable.Cell style={{flex: 2}}><Text style={styles.cellText}>{props.item.position}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.numericCell}><Text style={styles.numericCellText}>{props.item.durationShift}</Text></DataTable.Cell>
            <DataTable.Cell style={{flex: 1}}><Text style={styles.cellText}>{props.item.desc}</Text></DataTable.Cell>
            <DataTable.Cell style={{flex: 0.5}}>
                <IconButton
                 onPress={() => alert(props.item.id)}
                 style={{ flexDirection:'row', alignItems: 'center' }}
                  color='red'  mode='outlined' icon="close"
                  ></IconButton>
            </DataTable.Cell>
        </DataTable.Row>
    );
}

const styles = StyleSheet.create({
    cellText: {
        color: '#fff',
        
    },
    numericCell: {
        flex: 1,
        alignItems: 'center',
        
    },
    numericCellText: {
        color: '#fff',
        textAlign: 'center',
        
    }
});

