import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { addToCart, fetchHomePageProducts, fetchSingleProductById, useCartItems, useSingleProduct } from '../../../redux'
import { Box, Button, Typography } from '@mui/material'
import styled from '@emotion/styled'
import '../../../App.css';

const StyleBox=styled(Box)(()=>({
  marging:"auto",
    
   display:"flex",
   justifyContent:"center",
   margin:"auto",
}))

const StyleTypography=styled(Typography)(()=>({
 
   fontSize:"40px",
   marginBottom:"30px"
}))
const StyleButton=styled(Button)(()=>({
 
  fontSize:"40px",
  marginBottom:"260px",
  backgroundColor:"black",
  color:"brown",
  padding:"9px 100px",
  borderRadius:"40px",
  "&:hover":{
    backgroundColor:"white",

  }
}))
export const DetailedProduct = () => {
    const navigate=useNavigate()
  const cartItems = useCartItems()
  console.log("cartItems",cartItems)
  const { state } = useLocation()
  const { categoryName } = useParams
  console.log("categoryName", categoryName)
  const dispatch = useDispatch()
  const singleProduct = useSingleProduct()
  console.log("singleProduct", singleProduct)
  useEffect(() => {
    dispatch(fetchSingleProductById({ id: state.id, category: categoryName }))
  }, [state.id])


  return (
   
    <Box className='Si8ngleProductPage' >
 
      <img src={singleProduct?.image}  />
      <Box className='detailInfo' >
      <StyleTypography > Name :  {singleProduct?.name}  </StyleTypography>
      <StyleTypography>  Price : $   {singleProduct?.price}  </StyleTypography>
      <StyleTypography>  Color :   {singleProduct?.description}  </StyleTypography>
      <StyleTypography>  Brand :   {singleProduct?.brand}  </StyleTypography>
   
<StyleButton  onClick={() => navigate("/")}> Go Home Page</StyleButton>
      </Box>
   
    


    </Box>
  )
}
