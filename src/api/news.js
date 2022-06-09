import axios from 'axios'

export const add = function(post){
    return axios.post(`https://60371dc45435040017721a02.mockapi.io/products`,post)
}