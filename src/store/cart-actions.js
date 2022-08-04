import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = ()=>{
    return async (dispatch) =>{

        const fetchData = async()=>{

            const response = await fetch('https://react-http-7c7de-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok){
                throw new Error('Could not fetch error');
            }

            const data = await response.json();

            return data;
        };

        try{

            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));

        }catch(error){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error...',
                message:'Error sending data'+error
                }));
        }

    };

};


export const fetchOurApiData = ()=>{
    return async (dispatch) =>{

        const fetchData = async()=>{

            const response = await fetch('http://localhost:3001/items?page=0&per_page=20');

            if(!response.ok){
                throw new Error('Could not fetch error');
            }

            const data = await response.json();

            return data;
        };

        try{
            const cartData = await fetchData();
            console.log(cartData);

        }catch(error){
            console.log(error);
        }

    };
};

export const sendCartData = (cart)=>{

    return async (dispatch)=>{
        dispatch(uiActions.showNotification({
            status:'pending',
            title:'Sending...',
            message:'Sending cart data..'
        }));

        const sendRequest = async ()=>{

            const response = await fetch('https://react-http-7c7de-default-rtdb.firebaseio.com/cart.json',{
                method:'PUT',
                body:JSON.stringify(cart)
            });
    
            if(!response.ok){
                throw new Error('Sending Cart data failed');        
            }

        };
        try{

            await sendRequest();

            //const responseData = response.json();
            dispatch(uiActions.showNotification({
                status:'success',
                title:'Success...',
                message:'Sent cart data succesfully'
            }));

        }catch(error){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error...',
                message:'Error sending data'+error
                }));

        }
    
        
        
    };

};
