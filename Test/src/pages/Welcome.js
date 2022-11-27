import React from 'react';

import {
  StyleSheet, Text, View, TouchableOpacity, Image,TextInput,
} from 'react-native';
import MainPage from './MainPage';
export default class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://www.usimp.org.tr/uploads/images/uyeler/istanbul-kultur.png',
          }}></Image>

        <TextInput
          style={styles.txtinp}
          placeholder="Kullanıcı Adı Giriniz:"
          onChangeText={username => this.setState({username})}></TextInput>

        <TextInput
          style={styles.txtinp}
          placeholder="Şifre Giriniz:"
          onChangeText={password => this.setState({password})}></TextInput>
         
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.text}>Kaydol</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.props.navigation.navigate('MainPage')}>
          <Text style={styles.text}>Giriş Yap</Text>
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
});
