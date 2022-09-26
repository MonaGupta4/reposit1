import React from 'react';
import Comp2 from "./Comp2";
import Mycontext from './Mycontext';

function Comp1(props) {
     var name3=React.useContext(Mycontext);
     return (
          <div className="betterview">
               <h2> Component 1</h2>
               <h3>{props.a}</h3><h1>{name3}</h1>
               <Comp2 bname={props.a}></Comp2>
               
          </div>
     )
}

export default Comp1;
