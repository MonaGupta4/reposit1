import {Link, Outlet } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
     
     {/* <a href="/home">Home Anchor</a>&nbsp;&nbsp;
      <a href="/countries"> Countries Anchor</a>&nbsp;&nbsp; */}


     <Link to="/home">Home Link</Link>&nbsp;&nbsp;
     <Link to="/countries">Countries Link</Link>&nbsp;&nbsp;
     <Outlet></Outlet> 
    </div>
  );
}

export default App;