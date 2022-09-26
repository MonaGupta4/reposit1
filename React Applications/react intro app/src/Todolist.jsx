import React from 'react';
function Todolist(){
     var [todos,setTodos] = React.useState(['abc','xyz']);
    var [newtask,setNewTask]= React.useState('');
    var myref= React.useRef();

    function addtask(){
     setTodos([...todos,newtask])
    }
    function checkenter(e){
     if(e.key==='Enter'){
          addtask()
     }
    }
     React.useEffect(()=>{
          myref.current.focus();
     },[])
     return(
          <div className='betterview'>
                <h1>Todolist</h1>
                
               <input type="text"  onChange={(e)=>{setNewTask(e.target.value)}}  ref={myref} onKeyUp={checkenter} />
               <button onClick={addtask}>add task</button>
               {
                    todos.map((t,i)=>{
                         return(
                              <li>
                                   {t}
                              </li>
                         )
                    })
               }

              
          </div>
     )
}
export default Todolist;