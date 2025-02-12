import React, { useState } from 'react'
import Index from './routes/Index'
import { UserContext } from './hooks/ContextApi'
import { useLocalStorage } from './hooks/useLocalStorage'
import { ToastContainer } from 'react-toastify'
const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'))
  const [isLClicked, setIsLClicked] = useLocalStorage('isLClicked', false);
  const [isSClicked, setIsSClicked] = useLocalStorage('isSClicked',false);
  const [isOutClicked, setIsOutSClicked] = useLocalStorage('isOutClicked',false);
  return (
    // value={{isLoggedIn, setIsLoggedIn}}
    <UserContext.Provider value={{
      isLClicked, setIsLClicked,
      isSClicked, setIsSClicked,
      isOutClicked, setIsOutSClicked
    }}>
      <Index/>
      <ToastContainer position="bottom-right" autoClose={2000}/>
    </UserContext.Provider>
  )
}

export default App