import React, { useState } from 'react';

import { 
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import { 
  PADDING,
} from '../constants';

import { SocialIcon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

export default function LoginScreen(){

  const [hidePassword, setHidePassword] = useState(true);

  return(
    <>
    <View style={styles.container}>
      <Feather name='arrow-left' color='#000' size={24}/>
      <Text style={styles.textLogin}>
        Log in
      </Text>
      <View style={styles.social}>
        <SocialIcon
          title='Facebook'
          button={true}
          type='facebook'
          style={styles.facebook}
          iconSize={30}
          onPress={() => {alert('Đăng nhập FB')}}
        />
        <SocialIcon
          title='Message'
          button={true}
          type='twitter'
          style={styles.twitter}
          iconSize={30}
          onPress={() => {alert('Đăng nhập Twitter')}}
        />
      </View>
      <Text style={{textAlign: 'center', marginVertical: 12, color: "#aaa"}}>
        or login with email
      </Text>
      <View>
        <View style={styles.wrapTextInput}> 
          <TextInput 
            style={styles.textInput}
            placeholder='Your Email'
          />
        </View>
        <View style={styles.wrapTextInput}> 
          <TextInput 
            style={styles.textInput}
            placeholder='Password'
            keyboardType='default'
            secureTextEntry={hidePassword}
          />
          { hidePassword ?  
            <TouchableOpacity 
              onPress={ () => {
              setHidePassword(!hidePassword);
              }}
            >
              <Feather name='eye' size={16} color='#68d3c2'/>
            </TouchableOpacity> : 
            <TouchableOpacity
              onPress={ () => {
                setHidePassword(!hidePassword);
              }}
            >
              <Feather name='eye-off' size={16} color='#68d3c2'/>
            </TouchableOpacity>
          }
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.forgotPassWord}>
              Fotgot your password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={{textAlign: 'center', color: '#fff'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    {/* footer */}
    <View style={styles.footer}>
      <Text>
        Don't have an account? 
      </Text>
      <TouchableOpacity>
        <Text style={styles.textSignup}>
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: PADDING,
    marginTop: 30,
  },
  textLogin: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
  },
  social: {
    flexDirection: "row",
    width: "100%",
  },
  facebook: {
    flex: 1,
  },
  twitter: {
    flex: 1,
  },
  textInput: {
    fontSize: 16,
    flex: 1,
    paddingLeft: 16,
    paddingVertical: 8,
  },
  wrapTextInput: {
    flexDirection: "row", 
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 24,    
  },
  forgotPassWord: {
    color: '#999', 
    textAlign: 'right', 
    marginRight: 16,  
    marginVertical: 24,
  },
  buttonLogin: {
    backgroundColor: '#68d3c2', 
    paddingVertical: 12, 
    borderRadius: 24
  },
  footer: {
    flexDirection: "row",
    justifyContent: 'center',
    marginBottom: 30,
    alignItems: 'flex-end',
    backgroundColor: '#f2f2f2',
  },
  textSignup: {
    color: '#68d3c2',
    fontWeight: 'bold',
    marginLeft: 8,
  }
})