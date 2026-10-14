import React, { useState } from 'react';
 
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
 
import { StatusBar } from 'expo-status-bar';
import { colors, sizes } from './theme';
 
type Props = {
  onForgotPassword: () => void;
  onRegister: () => void;
};
 
export default function Login({ onForgotPassword, onRegister }: Props) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
 
  const handleLogin = () => {
    console.log('Кіру батырмасы басылды', { phone, password });
  };
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
 
      <View style={styles.container}>
        <Text style={styles.title}>Привет, с возвращением!</Text>
        <Text style={styles.subtitle}>Войдите в свой аккаунт.</Text>
 
        {/* Телефон нөмірін енгізу өрісі */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputIcon}>📞</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Номер телефона"
            placeholderTextColor={colors.subtitle}
            keyboardType="phone-pad"
          />
        </View>
 
        {/* Құпия сөзді енгізу өрісі */}
        <View style={[styles.inputContainer, { marginTop: 14 }]}>
          <Text style={styles.inputIcon}>🔒</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Пароль"
            placeholderTextColor={colors.subtitle}
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => setShowPassword((prev) => !prev)}>
            <Text style={styles.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
          </Pressable>
        </View>
 
        {/* Құпия сөзді ұмыттыңыз ба сілтемесі */}
        <Pressable style={styles.forgotButton} onPress={onForgotPassword}>
          <Text style={styles.forgotText}>Забыли пароль?</Text>
        </Pressable>
 
        {/* Кіру батырмасы */}
        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Войти</Text>
        </Pressable>
 
        {/* Тіркелу сілтемесі */}
        <View style={styles.registerRow}>
          <Text style={styles.registerText}>У вас нет аккаунта? </Text>
          <Pressable onPress={onRegister}>
            <Text style={styles.registerLink}>Зарегистрироваться</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 70,
  },
  title: {
    color: colors.text,
    fontSize: 27,
    fontWeight: '700',
    lineHeight: 34,
  },
  subtitle: {
    color: colors.subtitle,
    fontSize: 18,
    marginTop: 3,
    marginBottom: 29,
  },
  inputContainer: {
    width: '100%',
    height: sizes.inputHeight,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: sizes.borderRadius,
    paddingHorizontal: 18,
  },
  inputIcon: {
    fontSize: 20,
    marginRight: 14,
  },
  eyeIcon: {
    fontSize: 18,
    marginLeft: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    color: colors.text,
    fontSize: 18,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 14,
  },
  forgotText: {
    color: colors.purple,
    fontSize: 15,
    fontWeight: '600',
  },
  loginButton: {
    width: '100%',
    height: sizes.buttonHeight,
    backgroundColor: colors.purple,
    borderRadius: sizes.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: colors.subtitle,
    fontSize: 15,
  },
  registerLink: {
    color: colors.purple,
    fontSize: 15,
    fontWeight: '700',
  },
});
 