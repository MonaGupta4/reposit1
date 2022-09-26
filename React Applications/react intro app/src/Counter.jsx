import React from 'react'
import {useCounter} from "./hook1"


function Counter(){
     var[count,inc,dec]=useCounter()
     
     return(
          <div className='betterview'>
                <h1>Counter</h1>
               <img src="/logo512.png" alt="React" width='100px'/>
               <h1>{count}</h1>
               <button onClick={inc}>Inc</button>
               <button onClick={dec}>Dec</button>
           </div>
     )

}
export default Counter;                                                     
