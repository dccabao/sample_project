import {getProducts} from '../../../Data/Repository/ProductRepository';

export function getProductsUseCase() {
  return getProducts();
}
