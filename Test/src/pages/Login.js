import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';


export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <Image 
          style={styles.img}
          source={{
            uri: 'https://www.usimp.org.tr/uploads/images/uyeler/istanbul-kultur.png',
          }}></Image>
        <Text style={styles.head}>Yeni Bir Hesap Oluştur</Text>

        <TextInput
          style={styles.txtinp}
          placeholder="Tam Adınızı Giriniz :"></TextInput>

        <TextInput
          style={styles.txtinp}
          placeholder="Kullanıcı Adı Giriniz :"></TextInput>

        <TextInput
          style={styles.txtinp}
          placeholder="Şifre Giriniz:"></TextInput>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.props.navigation.navigate('Welcome')}>
          <Text style={styles.text}>Kaydol</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  txt: {
    color: 'red',
    fontSize: 20,
  },
  touchable: {
    width: 100,
    height: 50,
    backgroundColor: 'orange',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  img: {
    width: 370,
    height: 190,
    marginTop: 0,
  },
  txtinp: {
    width: 300,
    height: 40,
    borderWidth: 2,
    color: 'black',
    borderRadius: 10,
    marginVertical: 20,
  },
  head: {
    fontSize: 20,
    color: 'black',
  },
});
