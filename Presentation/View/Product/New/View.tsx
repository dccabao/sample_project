import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import useViewModel from './ViewModel';
import NameTextField from './components/NameTextField';
import PriceTextField from './components/PriceTextField';
import SaveButton from './components/SaveButton';

export default function NewProduct() {
  const {saveProduct, name, price, onChange} = useViewModel();

  return (
    <View>
      <Text>New Product</Text>
    </View>
  );
}
