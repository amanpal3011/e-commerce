import React from 'react'

const HomeSectionCart = ({ product }) => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
        overflow-hidden w-[13rem] mx-3 border'  >
            <div className='h-[15rem] w-[14rem]'>
                <img
                 className='object-cover object-top w-full h-full'
                 src={product.imageUrl}
                  alt="" 
                  />
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-grey-900'>{product.brand}</h3>
                <p className='mt-2 text-sm text-grey-500'>
                    {product.title} 
                </p>
            </div>
        </div>

    )
}

export default HomeSectionCart;