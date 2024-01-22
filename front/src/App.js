import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ROUTES from './Index.root';
import axios from 'axios';
import Maincontext from './COntext/context';
import toast from 'react-hot-toast';
const router = createBrowserRouter(ROUTES)

function App() {
  const [data, setData] = useState([])
  const [search, setSerch] = useState([])
  const [wishList, setWishList] = useState(localStorage.getItem("wishlistItem") ? JSON.parse(localStorage.getItem("wishlistItem")) : [])
  const [filter, setFilter] = useState([])
  const [basketItem, setBasketitem] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
  const addTowishlist = (product) => {
    const target = wishList.find(item => item._id == product._id)
    if (target) {
      toast.error("wishlistde movcuddur")
      
    } else {
      setWishList([...wishList, product])
      localStorage.setItem("wishlistItem", JSON.stringify([...wishList, product]))
      toast.success("added wishlist")
    }
  }
  const removeFromwishList = (product) => {
    const target = wishList.find(item => item._id == product._id)
    wishList.splice(wishList.indexOf(target), 1)
    setWishList([...wishList])
    localStorage.setItem("wishlistItem", JSON.stringify([...wishList]))
    toast.success("deleted wishlist")
  }
  const HandleSearch = (searchValue) => {
    if (searchValue == " ") {
      setData([...search])
    }
    else {
      setSerch([...data.filter(item => item.name.toLowerCase().trim().includes(searchValue))])
    }
  }
  const handleFilter = () => {
    setFilter([...data.sort((a, b) => b.price - a.price)])
    toast.success("product coxdan-aza duzuldu")

  }
  const addtoBasket = (product) => {
    const target = basketItem.find(item => item.product._id == product._id)
    if (target) {
      target.count += 1
      target.totalPrice = target.product.price * target.count
      setBasketitem([...basketItem])
      localStorage.setItem("basket", JSON.stringify([...basketItem]))
      toast.success("added to basket")
    }
    else {
      const basketProduct = {
        id: product._id,
        product: product,
        count: 1,
        totalPrice: product.price
      }
      setBasketitem([...basketItem, basketProduct])
      localStorage.setItem("basket", JSON.stringify([...basketItem, basketProduct]))
      toast.success("added to basket")
    }

  }
  const decreasBtn = (basketItems) => {
    const target = basketItem.find(item => item.id == basketItems.id)
    if (target.count > 1) {
      target.count -= 1
      target.totalPrice = target.product.price * target.count
      setBasketitem([...basketItem])
      localStorage.setItem("basket", JSON.stringify([...basketItem]))
      toast.success("desreased product")

    }

  }
  const increase = (product) => {
    const target = basketItem.find(item => item.id == product.id)
    target.count += 1
    target.totalPrice = target.product.price * target.count
    setBasketitem([...basketItem])
    localStorage.setItem("basket", JSON.stringify([...basketItem]))
  }
  const removeFromBasket = (product) => {
    const target = basketItem.find(item => item._id == product._id)
    basketItem.splice(basketItem.indexOf(target), 1)
    setBasketitem([...basketItem])
    localStorage.setItem("basket", JSON.stringify([...basketItem]))
    toast.success("deleted from basket")
  }



  useEffect(() => {
    axios.get("http://localhost:7373/pulse").then(res => {
      console.log(res.data)
      setData(res.data)
      setSerch(res.data)
    })
  }, [])
  const values = {
    data,
    addTowishlist,
    setData,
    HandleSearch,
    search,
    wishList, removeFromwishList,
    handleFilter,
    addtoBasket,
    basketItem,
    decreasBtn,
    increase,
    removeFromBasket

  }
  return (
    <div>
      <Maincontext.Provider value={values}>

        <RouterProvider router={router} />
      </Maincontext.Provider>

        
    </div>
  )
}

export default App

