import React from 'react'
import "./Last.scss"

function Last() {

  return (
    <div className='last__section'>
      <div className='last__form'>
        <div className='last__icon'><i class="fa-solid fa-drumstick-bite"></i></div>
        <div className='last__form__top'>
          <div className='xett4' style={{marginTop:"7px"}}></div>
          <div>Contact Us</div>
          <div className='xett4' style={{marginTop:"7px"}}></div>
        </div>
        <div className='last__input'>
          <input type="text" placeholder='Name' />
          <input type="text"  placeholder='E-mail'/>
        </div>
        <div className='last__textarea'>
          <textarea style={{width:"450px", marginLeft:"30px", border:"none", backgroundColor:"lightblue"}} name="" id="" cols="30" rows="10" placeholder='message'></textarea>
        </div>
        <div className='lastButton'><button>Send Message</button></div>
      </div>
      
    </div>
  )
}

export default Last
