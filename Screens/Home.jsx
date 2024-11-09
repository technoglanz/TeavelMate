import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  Image,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const Home = ({route, navigation}) => {
  const toProfile = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileIcon} onPress={toProfile}>
          <Text style={styles.profileText}>P</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.searchBox}
          placeholder="Search for destinations"
          placeholderTextColor="black"
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    padding: 5,
  },
  header: {
    height: height * 0.08,
    width: '100%',
    elevation: 5,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#000000',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  profileIcon: {
    height: 45,
    width: 45,
    borderRadius: 50,
    borderColor: '#000000',
    borderWidth: 0.5,
    elevation: 20,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  card: {
    height: 200,
    width: '100%',
    elevation: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    marginTop: 10,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    padding: 5,
  },
  searchBox: {
    paddingLeft: 10,
    paddingRight: 30,
    color: '#000000',
    fontWeight: '500',
    width: '100%',
    height: '100%',
  },
  placeImage : {
    height : '100%',
    width : '100%',
    borderRadius : 15,
    elevation : 15,
    borderColor : '#ffffff',
    borderWidth : 1
  }
});
