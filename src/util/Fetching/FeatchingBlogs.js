const { api } = require("../api_baseUrl/baseUrl")


export const blogsFetch=async()=>{
try {
    const response= await api.get('/api/v1/blogs')
    return response.data 
} catch (error) {
   return 'data fetching error' ,error||[]
}
}
export const singleBlogsFetch=async(id)=>{
try {
    const response= await api.get(`/api/v1/blogs/${id}`)
    return response.data 
} catch (error) {
   return 'data fetching error' ,error||[]
}
}