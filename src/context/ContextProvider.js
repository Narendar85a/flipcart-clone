import React, { createContext, useState } from 'react'

export const LoginContext = createContext(null)

const ContextProvider = ({childern}) => {
  const [account, setAccount] = useState('');

  return (
   <LoginContext.Provider value={{account, setAccount}}>
     {/* {childern} */}
   </LoginContext.Provider>
  )
}

export default ContextProvider