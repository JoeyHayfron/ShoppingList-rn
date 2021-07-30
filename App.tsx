import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import Header from './components/Header';
import AddItem, {IItem} from './components/AddItem';
import Item from './components/Item';

const App = () => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <View style={styles.contentWrapper}>
        <AddItem
          shoppingList={shoppingList}
          setShoppingList={setShoppingList} />
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.item} - ${index}`}
          renderItem={({item}) => (
            <Item item={item.item} quantity={item.quantity} />
          )}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
});

export default App;
