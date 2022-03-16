import React, { useState } from 'react'

function useCookieHook() {
    const [storedValue, setStoredValue] = useState<any>()
    
    const getCookie = (cookieName:string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${cookieName}=`);
        if (parts.length === 2) {
            let result = parts?.pop()?.split(';')?.shift()?.toString()
            setStoredValue(result)
        } 
      }

    const setCookie = (cookieName:string, cookieData:string) => document.cookie = `${cookieName} = ${cookieData}`;

    return {getCookie, setCookie,storedValue}
  
}

export default useCookieHook
