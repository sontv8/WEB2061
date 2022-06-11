import axios from 'axios'

const instance = axios.create({
    baseURL: "https://60371dc45435040017721a02.mockapi.io"
})

export const add = function(post){
    return instance.post(`/products`,post)
}

export const get = function(id){
    return instance.get(`/products/${id}`)
}

export const update = function(post){
    return instance.put(`/products/${post.id}`,post)
}

// update
export const getAll = function(){
    return instance.get(`/products`)
}
export const remove = (id) => {
    return instance.delete(`/products/${id}`);
};