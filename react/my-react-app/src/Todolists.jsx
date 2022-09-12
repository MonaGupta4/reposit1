import React from 'react';

function Todolists(){
     var [todo,setTodo] = React.useState(['abc','xyz','asd','zxc']);
     var [newtask,setNewTask]= React.useState('');
     function addtask(){
          //  var newtask = document.getElementById("text1").value;
               setTodo([...todo,newtask])
           }  
           function deltask(index){
               var temp=[...todo]
                        temp.splice(index,1)
                        setTodo([...temp])
           } 
     
     return(
          <div className='betterview'>
              
               <h4>component Todolists</h4>
               <input type="text"  onChange={(e)=>setNewTask(e.target.value)}/>
               <button onClick={addtask}>add task</button>
               <ul>
               {

                    todo.map((a,i) =>
                    {
                         return(
                         <li>
                              {a}
                              <button onClick={()=>{deltask(i)}}>Delete </button>
                          </li>
                         ) 
                   }     )
               }
               </ul>
          </div>
     )
          }
     export default Todolists;

 
 