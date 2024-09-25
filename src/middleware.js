import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const token= cookies().get('user-blog-token')
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}
 

export const config = {
  matcher: ['/contact','/blogs/:path*'],
}