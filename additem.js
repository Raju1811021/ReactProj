import React , {useState} from 'react';
import './all.css'

export const itemsContext=React.createContext(["mango"]);;
export const AddItem=(props)=>{
    const [todo,setTodo]=useState("");
    
    const inputHandler=(event)=>{
        setTodo(event.target.value);
    }
    const clickHandler=()=>{
        if(todo.length===0){
            return;
        }
        props.setItemArr([...props.arr,todo]);
       
        setTodo("");
        // console.log(arr);
    }
    return (
        
        <div className='divitem'>
            <b>Add Item</b>
            <input type="text" onChange={inputHandler} value={todo}/>
            <button onClick={clickHandler} className='btn btn-primary'>Submit</button>
        </div>
        
    );
};