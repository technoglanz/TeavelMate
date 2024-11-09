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
import firestore from '@react-native-firebase/firestore';

const { height, width } = Dimensions.get('window');

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Firebase Authentication to create user
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user; // Firebase user object

      // Firestore to add user details to the 'users' collection with user.uid as the document ID
      await firestore().collection('users').doc(user.uid).set({
        name: name,
        email: user.email, // Storing email
        uid: user.uid, // Store user's unique ID
      });

  

      // Success message
      Alert.alert('Success', 'Account created successfully!');

      // Navigate to Home screen, passing user details
      navigation.navigate('Home', { user: user });
    } catch (error) {
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
    height: height * 0.5,
    width: width * 0.85,
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
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
