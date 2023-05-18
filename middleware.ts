import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export function middleware(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log("requestHeaders", requestHeaders)
  // const country = requestHeaders.get('cloudfront-viewer-country-name')
  // if (country === 'India') {
  //   return NextResponse.redirect(new URL('/india', request.url));
  // } else if( country === 'China' ){
  //   return NextResponse.redirect(new URL('/china', request.url));
  // } else {
  //   console.log("no header")
  // }
  console.log("middleware")
}