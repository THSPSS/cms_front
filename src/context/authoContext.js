import { createContext , useEffect , useState } from "react";
import axios from "axios";

const BASE_PATH = "http://localhost:8080/api";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser , setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null))

    const userLogin = async(inputs)=>{
        const response = await axios.post(`${BASE_PATH}/auth/login`, inputs)
        console.log(response.data.userInfo)
        setCurrentUser(response.data.userInfo)
    }

    const userLogout = async(inputs)=>{
        await axios.post(`${BASE_PATH}/auth/logout`, inputs);
        setCurrentUser(null);
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser , userLogin , userLogout}}>
            {children}
        </AuthContext.Provider>
    )
}