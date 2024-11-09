import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const {height, width} = Dimensions.get('window');

const Profile = ({route, navigation}) => {
  const {user, userDetails} = route.params || {}; // Safely access route params

  const [name, setName] = useState(userDetails?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [mobile, setMobile] = useState(user?.mobile || '');
  const [dob, setDob] = useState(user?.dob || '');
  const [profile, setProfile] = useState(user?.profile || '');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDob(date.toISOString().split('T')[0]); // Format to "YYYY-MM-DD"
    hideDatePicker();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
        <View style={styles.profilePhotoContainer}>
          <Image
            source={{
              uri: user?.profilePhoto || 'https://via.placeholder.com/150',
            }}
            style={styles.profilePhoto}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />

          <Text style={styles.titleText}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.titleText}>Mobile No.</Text>
          <TextInput
            style={styles.input}
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
          />

          <Text style={styles.titleText}>Date of Birth</Text>
          <TouchableOpacity style={styles.dateInput} onPress={showDatePicker}>
            <Text style={styles.dobText}>{dob || 'Select Date of Birth'}</Text>
          </TouchableOpacity>

          <Text style={styles.titleText}>Profile</Text>
          <TextInput
            style={styles.input}
            value={profile}
            onChangeText={setProfile}
          />

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Save Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E2629',
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePhotoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  formContainer: {
    backgroundColor: '#EBEDEC',
    height: height * 0.7,
    width: width * 0.85,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  titleText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  dateInput: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dobText: {
    color: '#888',
    fontSize: 16,
  },
  saveButton: {
    height: 50,
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
