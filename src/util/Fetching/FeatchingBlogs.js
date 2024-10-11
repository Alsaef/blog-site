import api from "../api_baseUrl/baseUrl"



export const blogsFetch=async()=>{
try {
    const response= await api.get('/api/v1/blogs',{next:{revalidate:1}})
    return response.data 
} catch (error) {
   return 'data fetching error' ,error||[]
}
}
export const singleBlogsFetch=async(id)=>{
try {
    const response= await api.get(`/api/v1/blogs/${id}`,{next:{revalidate:1}})
    return response.data 
} catch (error) {
   return 'data fetching error' ,error||[]
}
}