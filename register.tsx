import React, { useState, useContext } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../App';

import { UserContext } from '../UserContext';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

export default function RegisterScreen({ navigation }: Props) {

  const {
    setName,
    setEmail,
    setMajor,
    setCourse,
  } = useContext(UserContext);

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [majorInput, setMajorInput] = useState('');
  const [courseInput, setCourseInput] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const register = () => {

    if (
      !nameInput ||
      !emailInput ||
      !majorInput ||
      !courseInput ||
      !password ||
      !repeatPassword
    ) {
      Alert.alert(
        'Қате',
        'Барлық жолды толтырыңыз'
      );

      return;
    }

    if (password !== repeatPassword) {
      Alert.alert(
        'Қате',
        'Құпия сөздер сәйкес келмейді'
      );

      return;
    }

    // Мәліметтерді сақтау
    setName(nameInput);
    setEmail(emailInput);
    setMajor(majorInput);
    setCourse(courseInput);

    Alert.alert(
      'Сәтті!',
      'Тіркелу аяқталды',
      [
        {
          text: 'OK',
          onPress: () =>
            navigation.navigate('Home'),
        },
      ]
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <Text style={styles.icon}>🎓</Text>

      <Text style={styles.title}>
        Тіркелу
      </Text>

      <Text style={styles.subtitle}>
        Студенттік аккаунт жасаңыз
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Аты-жөніңіз"
        value={nameInput}
        onChangeText={setNameInput}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={emailInput}
        onChangeText={setEmailInput}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Мамандығы"
        value={majorInput}
        onChangeText={setMajorInput}
      />

      <TextInput
        style={styles.input}
        placeholder="Курс"
        value={courseInput}
        onChangeText={setCourseInput}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Құпия сөз"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Құпия сөзді қайталаңыз"
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={register}
      >
        <Text style={styles.buttonText}>
          Тіркелу
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Login')
        }
      >
        <Text style={styles.link}>
          ← Кіру бетіне оралу
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },

  content: {
    padding: 25,
    paddingTop: 50,
    paddingBottom: 40,
  },

  icon: {
    fontSize: 50,
    textAlign: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 25,
  },

  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#1769e0',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  link: {
    textAlign: 'center',
    color: '#1769e0',
    marginTop: 20,
    fontSize: 16,
  },

});