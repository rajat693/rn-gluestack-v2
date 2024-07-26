import {SafeAreaView, Text} from 'react-native';
import {GluestackUIProvider} from './components/ui/gluestack-ui-provider';
import './global.css';

function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView className="flex-1 items-center justify-center bg-error-50">
        <Text className="text-success-500">hello world</Text>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

export default App;
