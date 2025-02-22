import React from 'react'
import CardProduct from './CardProduct'

export default function ListOfProducts({ products = [] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6  gap-5 z-5">
      {products.map(({ id, ...restProduct }) => (
        <CardProduct key={id} id={id} {...restProduct} />
      ))}
    </div>
  )
}
