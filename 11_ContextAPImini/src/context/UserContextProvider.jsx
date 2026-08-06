import { useState } from 'react'
import React from 'react'
import UserContext from './UserContext'

//yeh context provider hai.

const UserContextProvider = ({children}) => {
    
    const [user,setUser] = React.useState(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
