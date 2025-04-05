import React, { useState } from 'react'
import ProductCards from './ProductCards'
import { useFetchAllProdutsQuery } from '../../redux/features/products/productsApi'

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  //per page product show
  const [productsPerPage] = useState(8)

    // get all products call
    const {data:productsData={},error,isLoading} = useFetchAllProdutsQuery({})
    //console.log(productsData?.data)
    if(isLoading) return <p>Loading...</p>
    const {products,totalPages,totalProducts} =  productsData?.data || {}
    //console.log(products)

    //start products and ending products
    const startProduct = (currentPage -1)* productsPerPage +1
    const endProduct = startProduct + products.length - 1;

  return (
    <>
        <section className='section__container rounded bg-primary-light'>
        <h2 className='section__header'>Shop Page</h2>
        <p className='section__subheader'>Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.</p>
      </section>

      <section className='section__container'>
      <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
        {/* left side categories */}
        <div>
          categories
        </div>
        {/* right side products grid */}
        <div>
          <h3 className='text-xl font-medium mb-4'>Showing {startProduct} to {endProduct} of {totalProducts} products</h3>
          <ProductCards products ={products}/>
        </div>
      </div>
      </section>
    </>
  )
}

export default ShopPage