import { createContext,useEffect,useState } from "react";
import axios from "axios";

const AuthContext=createContext();
const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [token,setToken]=useState(null);
    const login=async({email,password})=>{
        try{
            const {data}=await axios.post('http://localhost:5000/api/auth/login',{email,password});
            console.log(data)
        }
        catch(error){
            console.log (error);
        }
    
    }
    const register=async({email,password})=>{
        try{
            const {data}=await axios.post('http://localhost:5000/api/auth/register',{email,password});
            console.log(data)
        }
        catch(error){
            console.log (error);
        }
    
    }
return <AuthContext.Provider value={{user,token,login}}>{children}</AuthContext.Provider>;
}
export {AuthContext,AuthProvider};