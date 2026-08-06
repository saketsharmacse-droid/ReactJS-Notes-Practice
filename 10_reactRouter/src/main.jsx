import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>

      <Route 
        path='github' 
        element={<Github/>}
        //route mei ek new optimization aaya hai
        //loader is used to fetch the data here only , from external apis.
        //yeh fetching will start even before useEffect does, as jaise hi user will hover, the fetching will start, and yeh toh even cache krke bhi rakhta hai data ko.
        loader={githubInfoLoader}
        />




    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> //routerprovider is a wrapper that creates routers.
  </StrictMode>,
)

//humnein router import krr liya hai toh router render hoga, app nhi
