import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  Alert,
} from 'react-native';

import auth from '@react-native-firebase/auth'

const { height, width } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    
    try {

      await auth().signInWithEmailAndPassword(email,password)
      navigation.navigate('Home')
      
    } catch (error) {
      Alert.alert(error.message)
    }

    console.log('Signup Info:', { name, email, password });
  };

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Text style={styles.heading}>Login</Text>

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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
    backgroundColor: 'green',
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
