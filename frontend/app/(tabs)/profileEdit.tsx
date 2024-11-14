// screen/profileedit.tsx teaching gitbuh contributions
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        username,
        email,
        phone_number: phone,
        password,
        dob,
      });
      Alert.alert('Success', 'User registered successfully');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Date of Birth (YYYY-MM-DD)" value={dob} onChangeText={setDob} />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  header: { fontSize: 24, marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 12, padding: 8 },
});

export default RegisterScreen;