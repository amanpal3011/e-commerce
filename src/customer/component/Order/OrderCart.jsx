import { Grid } from '@mui/material';
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCart = () => {
    const navigate=useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg shadow-gray-500 hover:shadow-2xl border' >
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem]' src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/s/w/c/xl-vlmk-combzip02-vida-loca-original-imagkc4hhm4fxhjb.jpeg?q=70' alt=''/>
                <div className='ml-5 space-y-2'>
                    <p className=''>Pack of 2 Men Solid Pure Cotton Straight Kurta</p>
                    <p className='opacity-50 text-xs font-semibold'>Size : M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color:black</p>
                </div>
            </div>

        </Grid>

        <Grid item xs={2}>
            <p>₹1099</p>

        </Grid>
        <Grid item xs={4}>
            {true && <div>
                <p>
                <AdjustIcon sx={{width:"15px" ,height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                <span>
                    Delivered on March 03
                </span>
               
            </p>
            <p className='text-xs'>
            Your Item Has Been Delivered 
            </p>
                </div>}
            {false && <p>
                <span>
                Expected Delivered on March 03 
                </span>
            </p>}

        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCart;
