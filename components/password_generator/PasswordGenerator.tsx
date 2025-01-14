import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// Validation schema using Yup
const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be minimum of 4 characters')
    .max(16, 'Should be maximum of 16 characters')
    .required('Length is required'),
});

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState('');
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [isSymbols, setIsSymbols] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);

  return (
    <View>
      <Text>PasswordGenerator</Text>
      <Formik
        initialValues={{passwordLength: ''}}
        validationSchema={passwordSchema}
        onSubmit={() => {}}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="type the password length"
          />
        </View>
        <View>
          <Text>Inlcude UpperCase</Text>
          <BouncyCheckbox
            isChecked={upperCase}
            fillColor="blue"
            text="include uppercase"
            onPress={(isChecked: boolean) => {
              setUpperCase(isChecked);
            }}
          />
        </View>
        <View>
          <Text>Inlcude UpperCase</Text>
          <BouncyCheckbox
            isChecked={upperCase}
            fillColor="blue"
            text="include uppercase"
            onPress={(isChecked: boolean) => {
              setUpperCase(isChecked);
            }}
          />
        </View>
        <View>
          <Text>Inlcude UpperCase</Text>
          <BouncyCheckbox
            isChecked={upperCase}
            fillColor="blue"
            text="include uppercase"
            onPress={(isChecked: boolean) => {
              setUpperCase(isChecked);
            }}
          />
        </View>
        <View>
          <Text>Inlcude UpperCase</Text>
          <BouncyCheckbox
            isChecked={upperCase}
            fillColor="blue"
            text="include uppercase"
            onPress={(isChecked: boolean) => {
              setUpperCase(isChecked);
            }}
          />
        </View>
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
