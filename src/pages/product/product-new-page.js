import React from 'react'
import {BasePage} from '../../components/base-page'
import ProductForm from './product-form'
const ProductNewPage = () => {
  return (
    <BasePage title={'New product'}>
      <ProductForm />
    </BasePage>
  )
}

export default ProductNewPage