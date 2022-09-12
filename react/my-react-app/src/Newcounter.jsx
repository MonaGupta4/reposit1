import React from 'react'
import {useCounter} from "./hook1"

function Newcounter(){
     var[count,inc,dec]=useCounter()
     return(
          <div className='betterview'>
                <h1>Newcounter</h1>
               
               <h1>{count}</h1>
               <h4 onClick={inc}>Inc</h4>
               <h4 onClick={dec}>Dec</h4>
           </div>
     )

}
export default Newcounter;