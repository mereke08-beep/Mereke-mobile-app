import React, { useContext } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../App';

import { UserContext } from '../UserContext';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;

export default function ProfileScreen({
  navigation,
}: Props) {

  const {
    name,
    email,
    major,
    course,
  } = useContext(UserContext);

  const logout = () => {

    Alert.alert(
      'Шығу',
      'Аккаунттан шығасыз ба?',
      [
        {
          text: 'Жоқ',
          style: 'cancel',
        },

        {
          text: 'Иә',
          onPress: () =>
            navigation.navigate('Login'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Home')
        }
      >
        <Text style={styles.back}>
          ← Басты бет
        </Text>
      </TouchableOpacity>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          👤
        </Text>
      </View>

      <Text style={styles.name}>
        {name || 'Студент'}
      </Text>

      <Text style={styles.student}>
        Студент
      </Text>

      <View style={styles.infoCard}>

        <Text style={styles.label}>
          Аты-жөні
        </Text>

        <Text style={styles.value}>
          {name || 'Көрсетілмеген'}
        </Text>


        <Text style={styles.label}>
          Email
        </Text>

        <Text style={styles.value}>
          {email || 'Көрсетілмеген'}
        </Text>


        <Text style={styles.label}>
          Мамандығы
        </Text>

        <Text style={styles.value}>
          {major || 'Көрсетілмеген'}
        </Text>


        <Text style={styles.label}>
          Курс
        </Text>

        <Text style={styles.value}>
          {course
            ? `${course} курс`
            : 'Көрсетілмеген'}
        </Text>

      </View>

      <TouchableOpacity
        style={styles.logout}
        onPress={logout}
      >
        <Text style={styles.logoutText}>
          Аккаунттан шығу
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f7fb',
  },

  back: {
    color: '#1769e0',
    fontSize: 16,
    marginTop: 40,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#dce9ff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  avatarText: {
    fontSize: 45,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },

  student: {
    textAlign: 'center',
    color: '#666',
    marginTop: 5,
  },

  infoCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginTop: 25,
  },

  label: {
    color: '#888',
    marginTop: 8,
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 3,
    marginBottom: 8,
  },

  logout: {
    backgroundColor: '#e53935',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },

  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});