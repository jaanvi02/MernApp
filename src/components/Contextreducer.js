import React, { createContext, useReducer,useContext} from 'react'

const cartStateContext=createContext();

const cartDispatchContext=createContext();
const reducer=(state,action)=>{
switch(action.type){
    case "ADD":
        return [...state,{id: action.id,name:action.name,qty:action.quantity,size:action.size,price:action.price,img:action.img}]
    case "REMOVE":
        let newArr=[...state]
        newArr.splice(action.index,1)
        return newArr;
    case "UPDATE":
      return state.map((food) => {
      if (food.id === action.id) {
        return {
          ...food,
          qty: parseInt(action.quantity) + food.qty,
          price: action.price + food.price,
        };
      }
      return food;
    });
    case "DROP":
      let emptyarr=[]
      return emptyarr
    default:
        return console.log("Error in reduction")
}
}
export const  CartProvider = ({children}) =>{
const [state,dispatch]=useReducer(reducer,[]);
  return (
    <cartDispatchContext.Provider value= {dispatch}>
        <cartStateContext.Provider value= {state}>
            {children}
        </cartStateContext.Provider >
    </cartDispatchContext.Provider >
  )
}
export const useCart=()=> useContext(cartStateContext);
export const useDispatch=()=> useContext(cartDispatchContext);