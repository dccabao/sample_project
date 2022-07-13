import React, {useEffect} from 'react';
import useViewModel from './ViewModel';
import { Text, View } from 'react-native';
import NameTextField from './components/NameTextField';
import PriceTextField from './components/PriceTextField';
import UpdateButton from './components/UpdateButton';
import DeleteButton from './components/DeleteButton';

export default function ProductDetail() {
  const {id} = useParams();
  const {name, price, onChange, getProduct, updateProduct, deleteProduct} =
    useViewModel();

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <View>
      <Text>Product Details</Text>
    </View>
  );
}
