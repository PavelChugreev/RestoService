export default class RestoService {

    _baseUrl = 'http://localhost:3000'

    getMenuItems = async () => {
        const path = '/menu';
        const response = await fetch(`${this._baseUrl}${path}`);

        if (!response.ok) {
            throw new Error('Hand ERR')
        }

        return await response.json()
    }


    postCart = async (order) => {
        const path = '/orders';

        const newOrder = {
            id: '',
            order: order
        }

        const response = await fetch(`${this._baseUrl}${path}`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newOrder)
        });

        if (response.ok) {
            console.log(response)
        } else {
            throw new Error('Hand ERR')
        }

        return await response.json()
    }
}