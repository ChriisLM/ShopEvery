import { createContext, useState } from "react"

export const UserContext = createContext()

export function UserProvider ({children}){
  const [isLogin, setIsLogin] = useState(false)
  const [settings,setSettings] = useState({})

  const loginChange = () => {
    setIsLogin(!isLogin)
  }

  const validateUser = (values) => {
    const users = JSON.parse(window.localStorage.getItem('users') ) 
    if(values.email == users.email && values.password == users.password){
      return true
    }
  }

  const registerUser = (user) => {
    window.localStorage.setItem('users',JSON.stringify(user))
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
      loginChange,
      validateUser,
      registerUser,
      settings,
      userSettings
    }}>
      {children}
    </UserContext.Provider>
  )
}