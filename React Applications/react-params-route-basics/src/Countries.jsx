
import React from 'react';
import {Link,Outlet} from 'react-router-dom';

function Countries() {
     var [countries,setcountries]=React.useState(['']);
     React.useEffect(()=>{
     fetch("https://restcountries.com/v2/all")
     
          .then(res=>res.json())
          .then(data=>setcountries(data))
     },[]);
     return (
          <div>
              
               <ul>{
                    countries&&countries.map((c,i)=>{
                         return(
                         <li key={i}>
                              <Link to={`/countryDetails/${c.alpha2Code}`}>
                              {c.name}</Link></li>)
                    })
                    }</ul>
                    <Outlet></Outlet>
               
          </div>
     );
}

export default Countries;
