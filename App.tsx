import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center bg-[#fcfcfc]">
      <HomeScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


