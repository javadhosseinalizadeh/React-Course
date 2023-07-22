import React from 'react'
import style from './product-form.module.css'
const ProductForm = () => {
  return (
    <form className= {style['product-form']}>
        <label htmlFor="title">Title</label>
        <input type="text" id='title' name='title'/>

        <label htmlFor="title">Title</label>
        <input type="text" id='title' name='title'/>

        <label htmlFor="description">Description</label>
        <input type="text" id='description' name='description'/>

        <label htmlFor="price">Price</label>
        <input type="text" id='price' name='price'/>


        <label htmlFor="discount-percentage">Discount Percentage</label>
        <input type="text" id='discount-percentage' name='discountPercentage'/>
        
        <label htmlFor="rating">Rating</label>
        <input type="text" id='rating' name='rating'/>
        
        <label htmlFor="stock">Stock</label>
        <input type="text" id='stock' name='stock'/>
        
        <label htmlFor="brand">Brand</label>
        <input type="text" id='price' name='brand'/>
       
        <label htmlFor="category">Category</label>
        <input type="text" id='price' name='category'/>
       
        <label htmlFor="description">Description</label>
        <textarea type="text" id='price' name='description' />

        
    </form>
  )
}

export default ProductForm
