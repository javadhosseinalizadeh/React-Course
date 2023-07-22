import React, { useEffect, useState } from 'react'
import { BasePage } from '../../components/base-page'
import ProductsCardView from './products-card-view'
import axios from 'axios'
import { BASE_URL } from '../../utils/constant'
const ProductsPage = () => {
  const [productList, setproductList] = useState([])
  useEffect(()=> {
    axios.get(BASE_URL +'/products')
    .then(Response => {
      setproductList(Response.data)
    })
  },[])
  return (
    <BasePage title={'Products'}>
      {productList.length > 0 ? <ProductsCardView products={productList}/> : <p>List is empty</p>}
    </BasePage>
  )
}

export default ProductsPage