import {SafeAreaView, Text} from 'react-native';
import './global.css';

function App() {
  //@ts-ignore
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-red-500">hello world</Text>
    </SafeAreaView>
  );
}

export default App;
