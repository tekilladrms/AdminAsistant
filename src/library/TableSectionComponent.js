import React from "react";
import { View, StyleSheet} from "react-native";
import { Table, Row, Rows, Cell, TableWrapper, Col } from "react-native-table-component";
import { DataTable } from 'react-native-paper';
import { TableRow } from "./TableRowComponent";
import { BACKGROUNDCOLOR } from "./colors";



export const TableSection = ({sectionData, navigation}) => {
    return(
        <View>
            {sectionData.map(item => <TableRow navigation={navigation} item={item} key={item.id} />)}
        </View>
    )
}
