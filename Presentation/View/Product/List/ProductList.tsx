import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import useViewModel from './ViewModel';
// import ProductList from "./components/ProductList";
import AddButton from "./components/AddButton";

export default function ProductList() {
  // const {products, getProducts, goToAddProduct, goToProductDetail} =
  //   useViewModel();

  useEffect(() => {
    // getProducts();
  }, []);

  return (
    <View>
      <Text>Product List</Text>
    </View>
  );
}
