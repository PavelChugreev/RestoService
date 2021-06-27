const initialState = {
    menu: [],
    cartItems: [],
    loading: false,
    error: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            }
        case 'ADD_TO_CART':
            
            const index = state.cartItems.findIndex(item => item.id == action.payload);
             console.log(index)

            if(index >= 0){
                const itemInState = state.menu.find(el => el.id == action.payload);
                console.log(itemInState)
                const newItem = {
                    ...itemInState, 
                    count: ++itemInState.count
                }
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems.slice(0, index),
                        newItem,
                        ...state.cartItems.slice(index + 1)
                    ]
                }            
            } else {
                const item = state.menu.find(el => el.id == action.payload);
                item.count = 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, item] 
                }
            }
            

        case 'DELETE_FROM_CART':
            const id = action.payload
            const idx = state.cartItems.findIndex(item => item.id == id);

            if(idx >= 0){
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems.slice(0, idx), 
                        ...state.cartItems.slice(idx + 1)
                    ] 
                }
            }
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true
            }
        case 'MENU_ERROR':
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}
 export default reducer;