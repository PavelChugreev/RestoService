export const menuLoaded = (newState) => {
    return {
        type: 'MENU_LOADED',
        payload: newState
    }
}
export const cartAdded = (id) => {
    return {
        type: 'ADD_TO_CART',
        payload: id
    }
}
export const cartDeleted = (id) => {
    return {
        type: 'DELETE_FROM_CART',
        payload: id
    }
}
export const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}
export const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}
