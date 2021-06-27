export default class RestoService {

    URL = 'http://localhost:3000/menu'

    getMenuItems = async () => {
        const response = await fetch(this.URL);

        if(!response.ok){
            throw new Error('Hand ERR')
        }

        return await response.json()
    }
} 