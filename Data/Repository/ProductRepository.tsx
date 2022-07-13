import {getAll} from '../DataSource/ProductDataSource';

export function getProducts() {
  const {result} = getAll();
  return {result};
}
