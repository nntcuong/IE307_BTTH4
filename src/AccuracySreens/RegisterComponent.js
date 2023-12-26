//Nguyễn Ngô Thế Cường : 21521905
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
const RegisterComponent = ({ handleLogin, navigation }) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  return (
    <View >
      <Image
        style={styles.imageStyle}
        source={{ uri: 'https://internet-israel.com/wp-content/uploads/2018/07/React_Native_Logo-768x403.png' }}
      />
      <Text style={styles.text}>Create New Account</Text>
      <View style={styles.containerTextInput}>
        <Image style={styles.imageTextInput}
          source={{ uri: 'https://tse4.explicit.bing.net/th?id=OIP.5ylLzBNwByczTaKBCAi9IgHaHa&pid=Api&P=0&h=220' }}>

        </Image>
        <TextInput
          style={styles.textI}
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.containerTextInput}>
        <Image style={styles.imageTextInput}
          source={{ uri: 'https://clipground.com/images/email-icon-clipart-transparent-1.png' }}>

        </Image>
        <TextInput
          style={styles.textI}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      {/* //Nguyễn Ngô Thế Cường : 21521905 */}
      <View style={styles.containerTextInput}>
        <Image style={styles.imageTextInput}
          source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.PO4tSlis-6R6EjopPKu0xQHaEH&pid=Api&P=0&h=220' }}>

        </Image>
        <TextInput
          style={styles.textI}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.containerTextInput}>
        <Image style={styles.imageTextInput}
          source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.PO4tSlis-6R6EjopPKu0xQHaEH&pid=Api&P=0&h=220' }}>

        </Image>
        <TextInput
          style={styles.textI}
          placeholder="Confirm password"
          value={confirm}
          onChangeText={setConfirm}
        />
      </View>
     
      <TouchableOpacity style={styles.button}  >
        <Text style={styles.textLogin}>CREATE</Text>
      </TouchableOpacity>
      
      <View style={styles.signUpContainer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginComponent')}>
          <Text style={styles.signUpText}>Login now !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
//Nguyễn Ngô Thế Cường : 21521905
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',

    marginTop: 120,
  },
  text: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  textInput: {
    height: 50,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 25,
  },
  Forgot: {
    fontSize: 12,
    marginTop: 5,

    marginRight: 20,
    color: '#FF1493',

  },
  //Nguyễn Ngô Thế Cường : 21521905
  button: {
    backgroundColor: '#FF8C00',

    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    width: 300,
    alignSelf: 'center',
    height: 45,
  },
  textLogin: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',

  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  imageStyle2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },

  signUpContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignSelf: 'center',
  },
  signUpText: {
    color: 'blue',
  },
  //Nguyễn Ngô Thế Cường : 21521905
  forgotContainer: {
    alignItems: 'flex-end',
    marginRight: 25,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  iconContainer: {
    padding: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  textI: {
    justifyContent: 'center',
    flex: 1,
    marginLeft:10,
  },
  containerTextInput: {
    height: 50,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 25,
    flexDirection: 'row',
  },
  imageTextInput: {
    width: 27,
    height: 27,
    marginTop:11,
    marginLeft:12,
  },
})
export default RegisterComponent;
