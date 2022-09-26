import React from 'react'


export function useCounter(){
     var  [count, setcount] = React.useState(0);
               function inc() 
               {
                    setcount(count+1)
               }
               function dec() 
               {
                    setcount(count-1)
               }
     return([count,inc,dec])
}