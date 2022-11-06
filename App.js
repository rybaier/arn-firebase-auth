import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default function App() {
  const firebaseConfig = process.env.FIREBASECONFIG
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return (
    <View style={styles.container}>
      <SignUpForm />
      <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
