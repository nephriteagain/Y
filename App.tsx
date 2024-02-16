import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Navigator from '@screens/index';


export default function App() {
  return (
    <>
    <Navigator />
    <StatusBar style='light' translucent={false} />
    </>
    );
}
