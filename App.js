import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/home/Home';
import { TimeSheetScreen } from './src/screens/time-sheet/TimeSheetScreen';
import { Details } from './src/screens/time-sheet/ShiftDetails';
import { ShiftCalendar } from './src/screens/calendar/ShiftCalendar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Главная' component={Home}/>
        <Stack.Screen name='Календарь' component={ShiftCalendar}/>
        <Stack.Screen name='Учет рабочего времени' component={TimeSheetScreen}/>
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


