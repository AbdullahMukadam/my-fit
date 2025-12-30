
import { StyleSheet, Text, View } from 'react-native';
import VirtualWardrobeScreen from './screens/virtualScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <VirtualWardrobeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    boxSizing:"border-box"
  },
});
