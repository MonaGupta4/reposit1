import React from 'react';

 import Todolists from './Todolists'
 import Counter from './Counter';
 import Newcounter from './Newcounter';
import './App.css';
import Comp1 from './Comp1';
import Mycontext from './Mycontext';



function App() {
  const [myname,setMyname]=React.useState("mona");
  return(
    <Mycontext.Provider value="gupta">
    <div className="betterview">
      <h1>welcome to React App development</h1>
      <div>
        <h4>{myname}</h4>
        <Comp1 a={myname}>
          
       </Comp1>
         
     </div>
      <Counter>Counter</Counter>
     <Newcounter></Newcounter>
      <Todolists></Todolists>
      
    </div>
    </Mycontext.Provider>
  )
}

export default App;
