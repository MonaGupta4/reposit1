import React from 'react';
import { connect } from 'react-redux';

function Todolist(props){
     
     return (
          <div>
               <h1>Todolist</h1>{
                    props.todolist.todos.map((t)=>{
                         return(
                              <li>{t}</li>
                         )
                    })
               }
               
          </div>
     );
}

export default  connect((store)=>{return store})(Todolist);
