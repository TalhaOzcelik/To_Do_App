import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

function MainPage() {
  const [text, setText] = useState('');

  const [tasks, setTasks] = useState([]);

  const handleAddTaskPress = () => {
    setTasks([...tasks, text]);
    setText('');
  };
  const handDeleteTaskPress = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar </Text>
      <Text style={styles.subtitle}>
        NOT: Gireceğiniz görevi metin kutusuna girin ve "ekle" butonuna basınız.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Yapılacakları giriniz :"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity
        style={styles.Btncontainer}
        onPress={handleAddTaskPress}>
        <Text style={styles.btntext}>Ekle</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <FlatList
        data={tasks}
        renderItem={({item, index}) => (
          <View style={styles.taskContainer}>
            <Text style={styles.tasktext}>{item}</Text>
            <TouchableOpacity
              style={styles.taskdelete}
              onPress={() => handDeleteTaskPress(index)}>
              <Text style={styles.taskdeletetext}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item + Date.now() + Math.random()}
      />
    </View>
  );
}
// FlatList bizim yazdıklarımızı listelemek amaçla kullanılıyor.
// render item ne gösterilecekse onu al ve text içerisinde yazdır bana demektir.

//keyExtractor bir unique bir key atamak için verilmişdir

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyConent: 'center',
    margin: 16,
  },
  title: {
    fontSize: 30,
    color: 'black',
    marginStart: 30,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,

    color: 'black',
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  btntext: {},
  Btncontainer: {
    backgroundColor: 'orange',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginTop: 8,
    borderWidth: 2,
  },
  divider: {
    marginVertical: 16,
    backgroundColor: '#ddd',
    height: 1,
  },
  tasktext: {
    fontSize: 18,
    marginStart: 5,
  },
  taskContainer: {
    marginBottom: 6,
    backgroundColor: 'orange',
    justifyContent: 'space-between',
    borderRadius: 6,
    padding: 3,
    flexDirection: 'row',
    borderWidth: 2,
  },
  taskdelete: {
    backgroundColor: 'red',
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
  taskdeletetext: {
    color: 'white',
    fontSize: 16,
  },
});

export default MainPage
