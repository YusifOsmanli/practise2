import React, { useContext } from 'react'
import Maincontext from '../COntext/context'
import Product from './Product'

function Products() {
  const {data,HandleSearch,search,handleFilter,addtoBasket}=useContext(Maincontext)
  return (
    <div className='product__alll'>
       <div className='product__iconn'><i class="fa-solid fa-helmet-safety"></i></div>
    <div className='Product__textt'>
      <div className='xett3' style={{marginTop:"7px"}}></div>
      <div style={{color:"white", fontSize:"20px"}}>OUR Menu</div>
      <div className='xett3'style={{marginTop:"7px"}}></div>
    </div>
    <div className='categories'>
      <span>BreakFast</span>
      <span>Brunch</span>
      <span>Lunch</span>
      <span>Dinner</span>

    </div>
<input type="text" placeholder='search by name' style={{width:"300px", height:"30px"}} onChange={(e)=>{
  HandleSearch(e.target.value)
  
}} />
<button style={{border:"nonw",backgroundColor:"black", color:"white", height:"30px", borderRadius:"9px", fontSize:"18px"}} onClick={()=>{
  handleFilter(data)
}}>filter by Price</button>
    
    
    
    
     <div className='data'>
     {
        search.map((item,index)=>{
          return(<Product  item={item} key={index}/>)
        })
      }
     </div>
      <div className='button__end'><button>See More</button></div>
    </div>
  )
}

export default Products
