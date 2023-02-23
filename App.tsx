import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#fcfcfc]">
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
