import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:3002",
});
export const getAll = () => {
    const url = `/products`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const add = (product) => {
    const url = `/products`;
    return instance.post(url, product);
};
export const remote = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
};