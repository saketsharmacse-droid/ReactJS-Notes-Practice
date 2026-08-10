# Notes:

- npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form

- Hum iss app mei BaaS use krenge, appWrite krke.
- This provides us a backend as a service, jaha pe sirf api calls krke hum auth, storage, database jaise cheezein le sakte hai.
- this appwrite is an opensource and free that can handle upto 10gb data.
- yeh same hai firebase jaise, bus isme opensource hai toh freedom zyada hai.

- humein sabse phle environment variables configure krna padega.
- react is a frontend library, jo bhi yaha likhte hai wo js se through browser mei shift hota hai, ab our application might contain passwords and user's data.
- kuch variables aise hote hai jo system variables hote hai and unko manage krne ka and deploy krne ka tareeka alag hota hai.
- .env krke ek file bnayenge
``` .env
REACT_APP_APPWRITE_URL="test environment"
```
- iss environment variable ko kabhi bhi production mei yaagithub mei ship nhi krte hai.
- isliye iss file ko hum gitignore mei daalte hai.

- .env file mei humare variables hote hai, toh we add them into gitignore, but hum ek sample env bnate haikyoki kaha kaha hunte krenge variables ko, isliye for ease in project makinh hum bnate hai ek sample .env aur isko production mei bhej sakte hai, iske contents exactly same hi rhte hai, sirf isme saare environment variables hata diye rhte hai, taaki wo spne hisab se use krr sako.
```js 
.env.sample
REACT_APP_APPWRITE_URL=""
```

- ab iss environment variable ka access kaise lu, toh yeh backend mei alag way mei liya jata hai aur frontend mei alag tareeke se, even libraries mei bhi alag.

``` js
import { useState } from 'react'

import './App.css'

function App() {

  console.log(process.env.REACT_APP_APPWRITE_URL);
  

  return (
    <div>
      <h1> A blog app with appWrite</h1>
    </div>
  )
}

export default App
```
- jab bhi environment vairables mei kuch bhi changes hoti hai toh project ko close krke re-run krna padta hai.
- env file ka access zyadatar process.env krke lete hai lyoki process ke andar defined hai yeh.
- lekin zaruri nhi ki har baar isi tareeke se access lenge.

- jab hum create react method se project bnayenge, toh humein humesgha env variables start krne hai isi format se: "REACT_APP_..."
- vite ke andar yhi format hai "VITE_..."
- even display krne ke liye import.meta.env.VITE_... (https://vitejs.dev/guide/env-and-mode.html)

- so, hum aise display krenge .env ko 
``` js
  console.log(import.meta.env.VITE_APPWRITE_URL);
```    