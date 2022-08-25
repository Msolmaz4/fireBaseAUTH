import { createContext ,useContext, useEffect, useState} from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged

} from 'firebase/auth'

import { auth } from "../firebase"

const UserContext = createContext()

export  const AuthContextProvider = ({children}) =>{
//burada obje atariz cunku obje donnecek bize
const [user,setUser] =useState({})


//burada kullanici olusturuyoruz
const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}


//bunu ensonYaptik bu kazitli kulanici girmesi icin 
//kayitli kisisnin girisi icin
const signIn = (email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)



}



const logout = ()=>{
    return signOut(auth)
}


//burada useefecet Yaparak cikisida koontrol ederiy
//icerdeki elemani kontrol icin bir degisken atariz
//yukarida user tanimlariz
//burada dokuman abak ona gore zyazdik
//mevcut olani yakalamak ivicn bu foksiyon genelde boyle yailir 

useEffect(()=>{
    const onsub = onAuthStateChanged(auth,(currentuser)=>{
        console.log(currentuser)
        setUser(currentuser)

    })
    return () =>{
        onsub()
    }

})




    return(
        <UserContext.Provider value={{createUser,user,logout,signIn}}>
        {children}
        </UserContext.Provider>
    )
}


//burada dikkat edilecek sey burad use Contevxy kullandik diger taraflarda direk atiyazcagit
export const UserAuth =()=>{
    return useContext(UserContext)
}
