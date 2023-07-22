import React from 'react'
import { BasePage } from '../../components/base-page'
import ProductForm from './product-form'

const ProductEditPage = () => {
  return (
    <BasePage title={'Edit product'}>
        <ProductForm />
    </BasePage>
  )
}

export default ProductEditPage