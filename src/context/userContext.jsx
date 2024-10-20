import { createContext, useState } from "react"

export const UserContext = createContext()

export function UserProvider ({children}){
  const [isLogin, setIsLogin] = useState(false)
  const [settings,setSettings] = useState({})

  const loginUser = () => {
    setIsLogin(!isLogin)
    console.log(isLogin)
  }

  const registerUser = () => {
    console.log('registrar usuario');
    
  }

  const userSettings = (setting,option) => {
    setSettings(prevState => ({
      ...prevState,
      [setting]: option
    }))
  }

  return (
    <UserContext.Provider value={{
      isLogin,
      loginUser,
      registerUser,
      settings,
      userSettings
    }}>
      {children}
    </UserContext.Provider>
  )
}