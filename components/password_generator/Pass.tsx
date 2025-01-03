import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Switch, Alert} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be minimum of 4 characters')
    .max(16, 'Should be maximum of 16 characters')
    .required('Length is required'),
});

export default function Pass() {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [numbers, setNumbers] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const allNumbers = '1234567890';
    const allSymbols = '!@#$%^&*()_+';

    if (uppercase) characterList += uppercaseChars;
    if (lowercase) characterList += lowercaseChars;
    if (numbers) characterList += allNumbers;
    if (symbols) characterList += allSymbols;

    if (!characterList) {
      Alert.alert('Error', 'Please select at least one character type');
      return;
    }

    let generatedPass = createPassword(characterList, passwordLength);
    setPassword(generatedPass);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      let charIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(charIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setUppercase(false);
    setLowercase(true);
    setSymbols(false);
    setNumbers(false);
    setIsPasswordGenerated(false);
  };

  return (
    <Formik
      initialValues={{passwordLength: ''}}
      validationSchema={passwordSchema}
      onSubmit={(values) => {
        generatePasswordString(parseInt(values.passwordLength));
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <Text style={styles.title}>Password Generator</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter password length"
            keyboardType="numeric"
            onChangeText={handleChange('passwordLength')}
            onBlur={handleBlur('passwordLength')}
            value={values.passwordLength}
          />
          {errors.passwordLength && touched.passwordLength && (
            <Text style={styles.errorText}>{errors.passwordLength}</Text>
          )}

          <View style={styles.switchRow}>
            <Text>Include Uppercase</Text>
            <Switch value={uppercase} onValueChange={(value) => setUppercase(value)} />
          </View>

          <View style={styles.switchRow}>
            <Text>Include Lowercase</Text>
            <Switch value={lowercase} onValueChange={(value) => setLowercase(value)} />
          </View>

          <View style={styles.switchRow}>
            <Text>Include Numbers</Text>
            <Switch value={numbers} onValueChange={(value) => setNumbers(value)} />
          </View>

          <View style={styles.switchRow}>
            <Text>Include Symbols</Text>
            <Switch value={symbols} onValueChange={(value) => setSymbols(value)} />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>Generate Password</Text>
          </TouchableOpacity>

          {isPasswordGenerated && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>Generated Password:</Text>
              <Text style={styles.password}>{password}</Text>
              <TouchableOpacity style={styles.resetButton} onPress={resetPassword}>
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  password: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 10,
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
