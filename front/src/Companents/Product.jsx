import React, { useContext } from 'react'
import "./Product.scss"
import Maincontext from '../COntext/context'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
function Product({item}) {
  const {addTowishlist,addtoBasket}=useContext(Maincontext)
 
  return (
   <>
    <div className='poduct_all'>
      <div className=''>
       <p style={{color:"white", fontSize:"20px"}}> {item.name}</p>

      </div>
      <div className='product__crops'>
     <div style={{color:"gray", fontSize:"20px"}}>{item.desc}</div>
     <div style={{color:"gray", }}>...............................</div>
     <div style={{color:"white", fontSize:"17px"}}>{item.price} $$</div>
      </div>
      <button onClick={()=>{
        addTowishlist(item)
      }}><i class="fa-solid fa-heart"></i></button>
      <button onClick={()=>{
        addtoBasket(item)
      }}><i class="fa-solid fa-basket-shopping"></i></button>
      <Link to={`/${item._id}`}><button>#</button></Link>
      
   
      
    </div>
    <Toaster/>
   </>
  )
}

export default Product
