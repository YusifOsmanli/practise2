import React, { useContext } from 'react'
import { useFormik } from 'formik';
import axios from 'axios' 
import Maincontext from '../COntext/context';
import toast, { Toaster } from 'react-hot-toast';
function Add() {
  const {setData,data}=useContext(Maincontext)
    const formik = useFormik({
      
        initialValues: {
          email: '',
        },
        onSubmit: values => {

          axios.post("http://localhost:7373/pulse",{...values}).then(res=>{
            setData([...res.data,values])
            toast.success("created item")
            
          })
        },
      });
  return (
    <div>
         <form onSubmit={formik.handleSubmit}>
       <label htmlFor="name">name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
 
       <label htmlFor="desc">desc</label>
       <input
         id="desc"
         name="desc"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.desc}
       />
 
       <label htmlFor="price">price</label>
       <input
         id="desc"
         name="desc"
         type="Number"
         onChange={formik.handleChange}
         value={formik.values.desc}
       />
 
       <button type="submit">Submit</button>
     </form>
      <Toaster/>
    </div>
  )
}

export default Add
