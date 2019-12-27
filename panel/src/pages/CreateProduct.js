import React from 'react';
import ProductForm from '../components/ProductForm';
import { endpoints } from '../../API';

function CreateProduct(){
   return <ProductForm url={endpoints.products.post} />
}

export default CreateProduct;