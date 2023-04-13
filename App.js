import React ,{useState} from 'react';
import './all.css';
import {Header} from './header';
import {AddItem} from './additem';
import {ItemContainer} from './itemslist';

export const myContext=React.createContext();
export const Container=()=>{
    const [arr,setArr]=useState([]);
    const deleteItem=(id)=>{
        const items=arr.filter((el,i)=>{
            return i!==id;
        });
        setArr(items);

    };
    return(
        <myContext.Provider value={{arr,setArr}}>
        <div className='containerd'>
            <Header/>
            <div className='subcontainer'>
            <AddItem setItemArr={setArr} arr={arr}/>
            <ItemContainer arr={arr} deleteItem={deleteItem}/>
            </div>
        </div>
        </myContext.Provider>
    );
}