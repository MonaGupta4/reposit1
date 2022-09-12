import React from 'react';
import Mycontext from './Mycontext';
function Comp2(props){
     var name2=React.useContext(Mycontext);
     return (
          <div className="betterview">
               <h3> Component2</h3>
               <h4>{props.bname}  {name2}</h4>
          </div>
     )
}

export default Comp2;