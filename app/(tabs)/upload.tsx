import { StyleSheet, Text, View } from 'react-native';

export default function UploadScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upload Screen</Text>
      <Text style={styles.subtext}>Video upload feature coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtext: {
    color: '#666',
    fontSize: 16,
    marginTop: 10,
  },
});
