import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { BACKGROUNDCOLOR } from '../../library/colors';
import { Header } from '../../library/Header'; 

export const Home = (props) => {
    return (
        <View style = {styles.container}>
            <Button color='#fff'
             style={styles.button} 
             title='Учет рабочего времени' 
             onPress={() => props.navigation.navigate('Календарь')}
             />
            <Button color='#fff' title='График работы персонала' />
            <Button color='#fff' title='Такси' />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: BACKGROUNDCOLOR,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 28,
    },
    button: {
        borderColor: '#fff',
        color: '#fff',
    },
  });
