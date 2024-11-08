import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import loginBG from '../assets/loginBG.png';

const { height, width } = Dimensions.get('window');

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={loginBG}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('Home')}
          accessibilityLabel="Skip Welcome Screen"
          accessibilityRole="button">
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.container2}>
          <Text style={styles.heading}>Welcome</Text>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate('Login')}
            accessibilityLabel="Login Button"
            accessibilityRole="button">
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSignup}
            onPress={() => navigation.navigate('Register')}
            accessibilityLabel="Signup Button"
            accessibilityRole="button">
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: 'transparent',
    height: height * 0.5,
    width: width * 0.85,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    //elevation: 10,
  },
  heading: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonLogin: {
    height: 50,
    width: '75%',
    borderRadius: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  buttonSignup: {
    height: 50,
    width: '75%',
    borderRadius: 30,
    backgroundColor: '#141C1F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#EEF0EF',
    fontSize: 18,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: 55,
    right: 10,
    padding: 6,
    backgroundColor: '#ffffff',
    borderRadius: 14,
  },
  skipText: {
    fontSize: 12,
    color: '#000',
  },
});
