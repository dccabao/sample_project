import {useState} from 'react';
import updateProductUseCase from '../../Domain/UseCase/Product/UpdateProduct';
import getProductUseCase from '../../Domain/UseCase/Product/GetProduct';
import deleteProductUseCase from '../../Domain/UseCase/Product/DeleteProduct';

export default function ProductDetailViewModel() {
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    name: '',
    price: 0,
  });

  function onChange(value, prop) {
    setValues({...values, [prop]: value});
  }

  async function deleteProduct(id) {
    const {result, error} = await deleteProductUseCase(id);
    setError(error);
  }

  async function getProduct(id) {
    const {result, error} = await getProductUseCase(id);
    setError(error);
    setProduct(result);
  }

  async function updateProduct() {
    const {result, error} = await updateProductUseCase(id, values);
    setError(error);
  }

  return {
    ...values,
    onChange,
    deleteProduct,
    getProduct,
    updateProduct,
  };
}
