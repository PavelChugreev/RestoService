const initialState = {
    menu: [],
    cartItems: [],
    loading: false,
    error: false, 
    total: 0
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

            if(index >= 0){
                const itemInState = state.menu.find(el => el.id == action.payload);
                const newItem = {
                    ...itemInState, 
                    count: ++itemInState.count
                }
                return {
                    ...state,
                    total: state.total + newItem.price,
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
                    total: state.total + item.price,
                    cartItems: [...state.cartItems, item] 
                }
            }
            

        case 'DELETE_FROM_CART':
            const idx = state.cartItems.findIndex(item => item.id == action.payload);

            if(idx >= 0){
                const item = state.cartItems.find(el => el.id == action.payload);

                return {
                    ...state,
                    total: state.total-item.count*item.price,
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