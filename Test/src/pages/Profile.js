import React from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Profile extends React.Component {
  

  render() {
    return (<View style={styles.Container}>
        <Text>Beni Hatırladın mı ?</Text>

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
});
