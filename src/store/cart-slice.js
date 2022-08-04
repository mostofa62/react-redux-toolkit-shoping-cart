import { createSlice } from "@reduxjs/toolkit";

const cartSlice =  createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantiy:0,
        changed:false        
    },
    reducers:{
        replaceCart(state, action) {
            //console.log(action.payload);
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action){
            //console.log(action.payload);
            const newItem = action.payload;
            const existingItem = state.items.find((item)=> item.id === newItem.id);
            //console.log(newItem);
            state.totalQuantiy++;
            state.changed = true;
            //state.changed = true;
            if(!existingItem){
                state.items.push({ 
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1 ,
                    totalPrice: newItem.price,
                    title: newItem.title 
                });
            }else{
                

                
                existingItem.quantity++;
                existingItem.totalPrice = newItem.price * existingItem.quantity;
                //state.items.concat(existingItem);
                
            }
            //console.log(state.items);
        },
        removeItemFromCart(state, action){   
            const id  = action.payload;
            //console.log(id);
            const existingItem = state.items.find((item)=> item.id === id);
            state.totalQuantiy--;
            state.changed=true;
            if(existingItem.quantity === 1){
                state.items = state.items.filter((item)=> item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }

});


export const cartActions = cartSlice.actions;
export default cartSlice;