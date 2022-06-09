import axios from 'axios'

// const instance = axios.create({
//     baseURL: ""
// })

export const add = function(post){
    return axios.post(`https://60371dc45435040017721a02.mockapi.io/products`,post)
}

export const get = function(id){
    return axios.get(`https://60371dc45435040017721a02.mockapi.io/products/${id}`)
}

export const update = function(post){
    return axios.put(`https://60371dc45435040017721a02.mockapi.io/products/${post.id}`,post)
}