import React from 'react';
import {connect} from 'react-redux';

function Counter(props){    //entire store is under props
     function inc(){
          props.dispatch({type:"INC"})  //pass action object to reducer as 2nd parameter.

     }
     function dec(){
          props.dispatch({type:"DEC"})  //pass action object to reducer as 2nd parameter.

     }
     function reset(){
          props.dispatch({type:"RESET"})  //pass action object to reducer as 2nd parameter.

     }
     return (
          <div>
              <h1>Counter:props.count</h1> 
              <Button onClick={inc}>Increment</Button>
              <Button onClick={dec}>Dectement</Button>
              <Button onClick={reset}>Reset</Button>
          </div>
     );
}

export default connect((store)=>{return store}) (Counter); 
//connect func will have call back function,which will pass the  entire store to Counter thru props
