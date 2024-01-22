import React from 'react'
import "./Section2.scss"

function Section2() {
    return (
        <div className='section2__all'>
            <div className='section2__icon'><i class="fa-solid fa-gift"></i></div>
            <div className='welcome'><h2>Welcome</h2></div>
            <div className='card__all'>

                <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title" style={{marginLeft:"100px"}}>2018</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>

                    <div class="card-body">
                        <h5 class="card-title"style={{marginLeft:"100px"}}>2020</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title"style={{marginLeft:"100px"}}>2021</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                </div>



            </div>
            <img src="https://preview.colorlib.com/theme/pulse/img/sign.png.webp" alt="" />

        </div>
    )
}

export default Section2
