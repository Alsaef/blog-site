import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
export const clientAuth=()=>{
    const token= Cookies.get('user-blog-token')
    if (token) {
        try {
          const user = jwt.decode(token)
          return user
        } catch (error) {
            return new Error('token Missing || Invalid',error)
        }
    }
    return null
}