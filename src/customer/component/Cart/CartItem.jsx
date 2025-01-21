import { Button, IconButton } from '@mui/material';
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[7rem] h-[7rem] lg:w-[9rem] lg:l-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/s/w/c/xl-vlmk-combzip02-vida-loca-original-imagkc4hhm4fxhjb.jpeg?q=70"
                        alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>
                        Pack of 2 Men Solid Pure Cotton Straight Kurta"
                    </p>
                    <p className='opacity-70'>
                        Size : l,white
                    </p>
                    <p className='opacity-70 mt-2'>
                        seller : Vida Loca
                    </p>
                    <div className='flex space-x-5 items-center text-gray-900 mt-6'>
                        <p className='font-semibold'>
                            ₹199
                        </p>
                        <p className='opacity-50 line-through'>
                            ₹211
                        </p>
                        <p className='text-green-600 font-semibold'>
                            ₹199
                        </p>
                    </div>
                </div>
                
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton>
                        <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>3</span>
                        <IconButton sx={{color:"RGB(145 85 253)"}}>
                        <AddCircleOutlineIcon/>
                        </IconButton>
                        
                    </div>
<div>
    <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
</div>
                </div>

        </div>
    )
}

export default CartItem;
