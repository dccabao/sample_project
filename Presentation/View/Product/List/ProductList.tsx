import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import useViewModel from './ViewModel';
import List from '../List/Components/List';

// import AddButton from "./components/AddButton";

export default function ProductList() {
  const {getProducts, products} = useViewModel();

  useEffect(() => {
    getProducts();
  }, []);

  console.log('products', products);

  return (
    <View>
      <Text>Product List</Text>
      <List data={products} />
    </View>
  );
}
