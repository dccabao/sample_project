import {useState} from 'react';
import createProductUseCase from '../../Domain/UseCase/Product/CreateProduct';

export default function NewProductViewModel() {
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    name: '',
    price: 0,
  });

  function onChange(value, prop) {
    setValues({...values, [prop]: value});
  }

  async function saveProduct() {
    const {result, error} = await createProductUseCase(values);
    setError(error);
  }

  return {
    ...values,
    onChange,
    saveProduct,
  };
}
