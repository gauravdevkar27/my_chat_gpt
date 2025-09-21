import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyChats, dummyUserData } from "../main_assets/assets";
const AppContext = createContext(); 
// global state container in react createContext() 
// is a function from React that creates a Context object.

//A Context is like a “global store” that lets you share 
// values (state, functions, data) across your 
//component tree without manually passing props at every level.

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


    // This function simulates fetching user data. 
    // Instead of making a real API call, it sets 
    // the user state with dummyUserData imported from your assets.

    const fetchUser = async () => {
        setUser(dummyUserData)   
    }

    // This function simulates fetching the user's chat history.
    //  It sets the chats state with dummyChats and sets the selectedChat 
    // // to be the first chat in that dummy list.

    const fetchUsersChats = () =>{
        setChats(dummyChats)         
        setSelectedChat(dummyChats[0])
    }
    //Theme Management: This effect runs whenever the 
    // theme state changes

    useEffect(() => {        
        if (theme === 'dark') {      //If the theme is 'dark', it adds the dark class to the main <html> element of your document. This is a common pattern for applying dark mode styles with Tailwind CSS.
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme])

    //Chat Fetching: This effect runs whenever the user state changes
    
    useEffect(()=>{
        if(user){
            fetchUsersChats()
        }
        else{
            setChats([])
            setSelectedChat(null)
        }
    }, [user])

    useEffect(() => {
        fetchUser()
    },[])

    const value = {navigate, user, setUser, fetchUser, chats, setChats, 
        selectedChat, setSelectedChat, theme, setTheme
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)