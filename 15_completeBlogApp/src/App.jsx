import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'

import './App.css'

//auth service bhi chahiye
import authService from "./appwrite/auth"

//dispatch krne ke liye import
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'



function App() {

  // console.log(process.env.REACT_APP_APPWRITE_URL);
  //console.log(import.meta.env.VITE_APPWRITE_URL);
  
  //app.jsx yaa file run krte hi humein state se kuch cheez chahiye rhegi, ki wo check krega ki user logged in hai bhi ki nhi, if user logged in hai toh usko kuch information access krne diya jayega, wrna login krne bolenge.

  //ek state bnayenge loading.
  //as appwrite se comminication pe time lagega, toh uss beech kuch data display krna hi padega.
  const [loading, setLoading] = useState(true)

  //dispatch bhi lagega as state change krunga toh current user leke aao and all mei.
  const dispatch = useDispatch()

  //ab jaise hi yeh applocation load ho, toh useeffect leke pucho ki aap logged in ho ya nhi.
  useEffect(() => {
      authService.getCurrentUser()
        .then((userData) => {
          if(userData){
            dispatch(login({userData}))
          }
          else {
            dispatch(logout())
          }
        })
        .finally(() => setLoading(false))


  }, [])//dependency array []



    //conditional rendering
    return !loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
          <div className='w-full block'>
            <Header/>
            <main>
                {/* <Outlet/> */}
            </main>
            <Footer/>
          </div>
      </div>
    ) : null
}

export default App
