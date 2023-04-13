import React from 'react';
// import { myContext } from './App';

export const Item=(props)=>{
    const item={
        width:"280px",
        display:'flex',
        justifyContent:'space-between',     
        // padding:"5px",
        borderRadius:"3px",
        marginBottom:"2px",
        backgroundColor:"white"
    };
    // const deleteItem=()=>{
    //     props.arr.splice(props.key1,1);
    //     props.setItemArr(props.arr);
    // }
    return(
        <div style={item}>
            <span>{props.data}</span>
            <span><i className="bi bi-pencil"></i>&nbsp;&nbsp;<i onClick={e=>{props.deleteItem(props.id)}} className="bi bi-trash"></i></span>
        </div>
    );
};

export const ItemContainer=(props)=>{
    const lst={
        marginRight: "20px",
        marginTop:"15px",
        // width:"30%"
        // backgroundColor:"aqua"
    };
    const lsttext={
        marginTop:"5px",

    };
    return(
        <div style={lst}>
            <b >Item List</b>
            
            <div style={lsttext}>
                    {  
                    props.arr.map((ele,index)=>{
                        return <Item data={ele} id={index} deleteItem={props.deleteItem} key={index}/>
                    }) 
                        
                    }
                
            </div>
        </div>
    );
} 