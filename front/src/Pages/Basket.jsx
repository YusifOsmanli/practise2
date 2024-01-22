import React, { useContext } from 'react'
import Maincontext from '../COntext/context'
import { Toaster } from 'react-hot-toast'

function Basket() {
  const{basketItem,decreasBtn,increase,removeFromBasket}=useContext(Maincontext)
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">+</th>
      <th scope="col">count</th>
      <th scope="col">-</th>
      <th scope="col">totalPrice</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>

    {
        basketItem.map((item,index)=>{
            return(
                <tr>
      <th scope="row" key={index}>{item.id}</th>
      <td>{item.product.name}</td>
      <td>{item.product.price}</td>
      <td><button onClick={()=>{
        increase(item)
      }}>+</button></td>
      <td>{item.count}</td>
      <td><button onClick={()=>{
        decreasBtn(item)
      }}>-</button></td>
      <td>{item.totalPrice}</td>
      <td><button onClick={()=>{
        removeFromBasket(item)
      }}>delete</button></td>
              </tr>
            )
        })
    }
    
    
  
    
  </tbody>
</table>
      <Toaster/>
    </div>
  )
}

export default Basket
