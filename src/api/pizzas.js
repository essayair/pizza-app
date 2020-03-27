import { get, post, put, del } from './axios';

import pizzaSample from '../assets/imgs/pizza-sample.png';//mock image


export const fetchPizzas = () => {
    const url = './pizzas';
    return get(url).then(res =>res.data.map(pizza =>({
        ...pizza,
        pizzaImage: pizzaSample,
    })))
}