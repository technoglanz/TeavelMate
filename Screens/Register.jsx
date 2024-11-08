import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const { height, width } = Dimensions.get('window');

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Make handleSignup asynchronous
  const handleSignup = async () => {
    try {
      // Create a new user with email and password
      await auth().createUserWithEmailAndPassword(email, password);

      console.log('Signup Info:', { name, email, password });

      // Show success alert
      Alert.alert('Success', 'Account created successfully!');

      
      navigation.navigate('Home'); 

    } catch (error) {
      // Handle any errors from Firebase Auth
      console.error(error);
      Alert.alert('Signup Error', error.message);
    }
  };

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Text style={styles.heading}>Signup</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#555"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#555"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#555"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E2629',
  },
  container2: {
    backgroundColor: '#EBEDEC',
    height: height * 0.5, // 60% of the screen height
    width: width * 0.85, // 85% of the screen width
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20, // Space below the heading
  },
  input: {
    height: 50,
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: '#000',
  },
  button: {
    height: 50,
    width: '75%',
    borderRadius: 30,
    backgroundColor: '#141C1F',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#EEF0EF',
    fontSize: 18,
  },
});
