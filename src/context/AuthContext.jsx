import { createContext ,useContext} from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged

} from 'firebase/auth'

import { auth } from "../firebase"

const UserContext = createContext()

export  const AuthContextProvider = ({children}) =>{
//burada kullanici olusturuyoruz
const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

    return(
        <UserContext.Provider value={{createUser}}>
        {children}
        </UserContext.Provider>
    )
}


//burada dikkat edilecek sey burad use Contevxy kullandik diger taraflarda direk atiyazcagit
export const UserAuth =()=>{
    return useContext(UserContext)
}
