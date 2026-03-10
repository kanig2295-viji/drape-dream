import React from 'react'
import './Kidswear.css'
import { Kids } from '../Constant/Data'
import { boys } from '../Constant/Data'
const Kidwear = () => {
  return (
    <div className='container'>
      <div className='row6'>
       <h1> Elegant Kids Collection</h1></div>

        <div className='row7'>  
            { 
            Kids.map((item)=>
             <div className="col8" id={item.id}>
                <img src={item.img} alt="kids"/>
                 <div className='but'>
                    <button>Get Quote</button>
                 </div>
           </div>
           )
            }           
            </div>
             <div className='row7'>  
            { 
            boys.map((item)=>
             <div className="col8" id={item.id}>
                <img src={item.img} alt="boys"/>
                 <div className='but'>
                    <button>Get Quote</button>
                 </div>
           </div>
           )
            } 
        </div>
    </div>
  )
}

export default Kidwear
