import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import InputTextField from "../../components/InputTextField";
import styles from './Login.styles';
import { useNavigation } from '@react-navigation/native';

class Login extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View style={{ marginTop: 60, alignItems: "center", justifyContent: "center" }}>
              <Image source={require('../../assets/logo.png')} style={styles.logo}/>
          </View>
          <View style={{ marginTop: 48, flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity style={styles.socialButton}>
                  <Image source={require('../../assets/twitter-icon.png')} style={styles.socialLogo} />
                  <Text style={styles.socialText}>Twitter</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                  <View style={styles.socialButton}>
                      <Image source={require('../../assets/facebook-icon.png')} style={styles.socialLogo} />
                      <Text style={styles.socialText}>Facebook</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                  <Image source={require('../../assets/google-icon.png')} style={styles.socialLogo} />
                  <Text style={styles.socialText}>Google</Text>
              </TouchableOpacity>
          </View>

          <Text style={[styles.text, { color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20 }]}>or</Text>

          <InputTextField style={styles.inputTitle} title="Email" />
          <InputTextField
              style={{
                  marginTop: 32,
                  marginBottom: 8
              }}
              title="Password"
              isSecure={true}
          />

          <Text style={[styles.text, styles.link, { textAlign: "right" }]}>Forgot Password?</Text>

          <TouchableOpacity style={styles.submitContainer}>
              <Text
                  style={[
                      styles.text,
                      {
                          color: "#FFF",
                          fontWeight: "600",
                          fontSize: 16
                      }
                  ]}
              >
                  Login
              </Text>
          </TouchableOpacity>

          <Text
              style={[
                  styles.text,
                  {
                      fontSize: 14,
                      color: "#ABB4BD",
                      textAlign: "center",
                      marginTop: 24
                  }
              ]}
          >
              Don't have an account? <Text style={[styles.text, styles.link]}>Register Now</Text>
          </Text>
      </View>
  </ScrollView>
    );
  }
}

export default Login;
