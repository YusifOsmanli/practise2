import React, { useContext } from 'react'
import Maincontext from '../COntext/context'
import { Toaster } from 'react-hot-toast'

function Wishlist() {
  const{wishList,removeFromwishList}=useContext(Maincontext)
  return (
    <div className='wishlist__card'>
      {
        wishList.map((item,index)=>{
          return(
            <div class="card" style={{width: "18rem;"}}>
 
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.desc}</p>
   <p>{item.price}</p>
  <button className='btn-btn-danger' onClick={()=>{
    removeFromwishList(item)
  }}>delete</button>
  </div>
</div>
          )
        })
      }
      <Toaster/>
      
    </div>
  )
}

export default Wishlist
