import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootParamList } from './src/types';
import Main, {homeOptions} from './src/screens/Stacks/Main';


const Stack = createNativeStackNavigator<RootParamList>()

export default function App() {
  return (
    <>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Main" 
            component={Main}
            options={homeOptions}
            />
        </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
});
