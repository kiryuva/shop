import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: null,
    url: 'https://dummyjson.com/products/',
  }),
  actions: {
    async getItemById(id) {
      try {
        const res = await axios.get(`${this.url}/${id}`);
        this.products = res.data
        console.log(res.data)
      } catch (error) {
        console.error('Произошла ошибка при получении динамического продукта', error)
      }
    },
  },
})

export default useProductStore;