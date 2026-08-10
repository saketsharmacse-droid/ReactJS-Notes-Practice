import { useState } from 'react'

import './App.css'

function App() {

  // console.log(process.env.REACT_APP_APPWRITE_URL);
  console.log(import.meta.env.VITE_APPWRITE_URL);
  
  

  return (
    <div>
      <h1> A blog app with appWrite</h1>
    </div>
  )
}

export default App
