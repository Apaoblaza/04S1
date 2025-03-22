import { createContext,useEffect,useState } from "react";
import axios from "axios";

const UserContext=createContext();
const UserProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [token,setToken]=useState(null);
    const login=async({email,password})=>{
        try{
            const {data}=await axios.post('http://localhost:5000/api/auth/login',{email,password});
            setToken(data.token);
            setUser(data.user);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
        }
        catch(error){
            console.log (error);
        }
    
    }
    const register=async({email,password})=>{
        try{
            const {data}=await axios.post('http://localhost:5000/api/auth/register',{email,password});
            setToken(data.token);
            setUser(data.user);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));}

        catch(error){
            console.log (error);
        }
    
    }
    const getProfile = async () => {
        try {
            if (!token) return;

            const { data } = await axios.get('http://localhost:5000/api/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUser(data.user || data); // ajusta según la estructura que devuelva tu backend
            localStorage.setItem("user", JSON.stringify(data.user || data));
        } catch (error) {
            console.error("Error obteniendo perfil:", error);
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Función para logout
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

return <UserContext.Provider value={{user,token,login, register, logout,getProfile}}>{children}</UserContext.Provider>;
}
export {UserContext,UserProvider};