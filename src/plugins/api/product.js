export default ({ axios }) => {
  return {
    getProducts: async () => {
      const response = await axios.get('/products')
      return response.data
    }
  }
}
