import { StyleSheet, Text, View } from 'react-native';

function Navbar() {
    return (
        <View style={styles.container}>
          <Text>This is Navbar</Text>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 2,
        backgroundColor:"black"
    }
})