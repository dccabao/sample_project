import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './Presentation/View/Product/List/ProductList';
import ProductNew from './Presentation/View/Product/New/ProductNew';
import ProductDetail from './Presentation/Views/Product/Detail/ProductDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product List" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
