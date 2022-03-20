import React, { useState } from 'react'

function useCookieHook() {
    const [storedValue, setStoredValue] = useState<any>() 
    
    const getCookie = (cookieName:string) => {
        //cookie almamızı sağlayacak fonksiyon
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${cookieName}=`);
        if (parts.length === 2) {
            let result = parts?.pop()?.split(';')?.shift()?.toString()
            setStoredValue(result)
        } 
      }

      //cookileri vereceğimiz data ile setleyebileceğimiz fonksiyon
    const setCookie = (cookieName:string, cookieData:string) => document.cookie = `${cookieName} = ${cookieData}`;

    const deleteCookie = (cookieName: string) => {
        //Kullanma tarihine göre delete eder cookie
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
      }

    return {getCookie, setCookie,storedValue, deleteCookie}
  
}

export default useCookieHook
