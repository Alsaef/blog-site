import { cookies } from "next/headers"
import jwt from 'jsonwebtoken';
export const authServer=()=>{
    const token= cookies().get('user-blog-token')
    if (token) {
        try {
          const user = jwt.decode(token.value)
          return user
        } catch (error) {
            return new Error('token Missing || Invalid',error)
        }
    }
    return null
}