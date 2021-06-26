export const menuLoaded = (newState) => {
    return {
        type: 'MENU_LOADED',
        payload: newState
    }
}
export const menuRequeted = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}
export const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}
