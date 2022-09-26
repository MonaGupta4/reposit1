import counterReducer from './counterReducer';
import {combineReducers, createStore} from "redux" //for store
import todoReducer from './todoReducer';
var myreducer=combineReducers({counter:counterReducer,todolist:todoReducer}) //reducer state is now available in ......
//                                                             and  in object form key;value pair

//var cstore=new createStore(counterReducer)  //creating store, passing reducer to store fot state values
var mainstore=new createStore(myreducer)
export default mainstore;