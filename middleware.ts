import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

//for all paths //
// let requestCount = 0;
// export function middleware(request: NextRequest) {
//   requestCount++;
//   console.log("number of requests is " + requestCount);
//   return  NextResponse.next()
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/api/:path*',
// }

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
 //selectively running middleware
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }
}
