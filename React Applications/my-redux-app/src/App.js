import './App.css';
import mainstore from './store/store';
import {Provider} from 'react-redux';
import Counter from './Counter';
import Todolist from './Todolist';

function App() {      
  return (
         <Provider store={mainstore}>
          {/*binding whole app with store thru provider*/}
    <div className="App">
      <h1>App component</h1>
      <Todolist></Todolist>
      <Counter></Counter>
     
    </div>
  </Provider>
  );
}

export default App;
