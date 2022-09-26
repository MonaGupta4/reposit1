import React from 'react';
import {useParams} from 'react-router-dom';

function CountryDetails () {
     var params=useParams();
     const [country,setcountry]=React.useState({});
     React.useEffect(()=>{
      fetch(`https://restcountries.com/v2/alpha/${params.c}`)
      .then(res=>res.json())
      .then(data=>setcountry(data))
},[params])
    
     return (
          <div>
               <h1>CountryDetails</h1>
               <h1>{country.name}</h1>
               <h1>{country.capital}</h1>
               <img src={country.flag} width='300' alt=""/>
          </div>
     );
}

export default CountryDetails;
