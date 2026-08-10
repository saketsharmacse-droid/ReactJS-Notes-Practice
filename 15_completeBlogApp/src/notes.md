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

- Now, hum .env mei baaki variables add krr dete hai, keep it empty abhi ke liye, we can name them in lower case as well, but convention hai upper case mei krna.
```js
VITE_APPWRITE_URL="test environment"
VITE_APPWRITE_PROJECT_ID=""
VITE_APPWRITE_DATABASE_ID=""
VITE_APPWRITE_COLLECTION_ID=""
VITE_APPWRITE_BUCKET_ID=""
```

## Building the project

- sabse phle appwrite baas mei jaake start a new project/ create project/ settings/ waha jaake API endpoint ko copy krna hai and paste it in .env VITE_APPWRITE_URL
- project id copy krke paste krrdo.
- appwrite mei jaake auth, tables creation, bucket(storage) sab kuch bna lo.
-ek config krke folder mei file bnayenge conf.js krke, this is a productionlevel practice followed everywhere.

```js
//ek config krke folder mei file bnayenge conf.js krke.
//this is a productionlevel practice followed everywhere.
const conf = { 
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID),
    //fayda yeh hoga ki isme string milne ki surity rhegi, aur thoda sa systematic milega.



}

export default conf

//kya hota hai ki har baar:  console.log(import.meta.env.VITE_APPWRITE_URL); aise krke use krne is not good practice.
//kabhi load nhi hua yaa error aa gya toh bahut difficult hota hai.
//toh hum saare variables ko ek jagah laake export krr denge.
//actually .env file ke andar values must be in string, but kabhi kabhi humein agar "" ke andar nhi likhe hai toh wo uso numbers treat krega and problems aayengi.
```

- ab hum use krr rhe appwrite for backend, toh hum directly uski services ko use krenge, no need tothink about the backprocesses.
- but humein code kuch aise likhna hai ki vendor-lockin bna rhe, kal authentication system agar appwrite se nikalna pade, toh bhi humara program acche se chlta rhe.
- services: hum sirf methods ko import export krte hai, data btate hai bus, baaki working se utna zyada matlab nhi rhta hai.
 - first service we use will be the auth
 ```js
 //hum ek folder hi use krr lenge appwrite ka, and usme saare services jo appwrite ke use krenge wo sab rhega.
import conf from '../conf.js'

import {Client, Account, ID} from "appwrite"

export class AuthService {
    client =  new Client();
    account;

    //object bna hai AuthServices ka toh by default ek constructor bhi call hoyega.
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)

    }
    //hum ek method bnayenge jisme appwrite ki services ko use krenge.
    //this will be like a wrapper, jo under the hood appwrite firebase jo bhi use krwayega, and yeh async hoga as per the documentation.

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name) //documentations say ki first parameter should be a unique id.

            if (userAccount) {
                //call another method.
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }



    async login({email, password}){
        try{
            return await this.createEmailSession(email, password);

        } catch (error){
            throw error;
        }
    }


    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("AppWrite Service :: getCurrentUser :: error", error);
            
        }
        return null; //if trycatch method mei problem aaya toh null return toh hoga hi, if account not found waali cheezon pe.
    }

    //delete session is actually logout.
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("AppWrite Service :: getCurrentUser :: error", error);
            
        }
    }
}

const authService = new AuthService()

//export default AuthService //class bna ke export krr diye.
//ab iss class ko jo use krega usko object bnana padega, toh kyo na mai hi object bna ke export krr du.

export default authService;

//ab object se saari services ki access hai, like .logout()

//hence this is a generic authentication code which can be used in any projects we need to build, we can use the same code.
```

- next hum database ki service bnayenge