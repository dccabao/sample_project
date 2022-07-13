import {useState} from 'react';
import getProductsUseCase from '../../Domain/UseCase/Product/GetProducts';
export default function ProductListViewModel() {
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const {result, error} = await getProductsUseCase();
    setError(error);
    setProducts(result);
  }

  return {
    products,
    getProducts,
  };
}
