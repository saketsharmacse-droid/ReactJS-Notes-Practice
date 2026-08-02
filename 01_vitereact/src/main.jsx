import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
//ek aur cheez hoti hai react ke andar ki hum jsx ko direct bhi call krr sakte hai:
import {jsx as _jsx} from "react/jsx-runtime.js"
//isko use krke hum apne evaluation ko create element ke jagah directly jsx se krr sakte hai, but its complex.
//we'll see the opensource library of react: https://github.com/react/react/blob/main/packages/react/src/jsx/ReactJSXElement.js

function MyApp(){
  return(
    <>
      <h1>Custom App!</h1>
    </>
  )
}

// const ReactElement = {
//     /*//react kya krta hai, jo bhi return hoti hai tags unka use krke ek tree bnata hai.
//     //properties ka tree, using type, props*/
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherElement = (

  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"

//kya hota hai na, jab saare tree bnn  jaate hai, uske baad fir variables injections aate hai, and variables directly add ho jaate hai.

//hum ek react ke hisab se react element bnayenge.
//React.createElement method ko babble transpiler by default inject krta hai.
const reactElement = React.createElement(
  //phle mai apne hisab se custonm props de rha tha ki  type, props etc, but actually mei uska ek fixed syntax rhta hai react ka.
  //first expected parameter is a tag, p/h1 whatever
  'a',
  //second tag is expected to be an object, but uska naam nhi de sakte, yeh object saari properties add krta hai, like that of props in custom react.
  {href: "https://google.com", target: '_blank'},

  //iske baad exoected rhta hai direct tag
  'Click me to access google search engine !',

  anotherUser // as it is inject ho jaata hai variable. for variable to evaluate.
  //iska mtlab hai ki yeh sab ek object ke form ke under the hood send hoga, ajsie humnein custom mei bnaya tha accorduing to react protocols.
  //ab, agar koi bhi evaluation string yaa conditions rhta in this variable, toh wo kaise hi pass hota react ke object mei, as uske rules hote hai.
  //isliye, hum log expression {} ke andar final evaluated strings hi likhte hai, naa ki evaluation.

)

//reacthumein expect krta hai li props ko khudse protocol se use krega, render bhi strict rhega.

createRoot(document.getElementById('root')).render(
  
    <App/>

  
)
// reactElement
{/*
MyApp() aise krne se bhi run hoga, as function hai yeh aur JS mei function aise execute hota hai.
But against conventions.

<ReactElement /> aise bhi run nahi hoga. Main try kar raha tha ki ReactElement ko directly render karwaun,
but yeh yahan ek component expect karta hai. ReactElement ek object hai,
isliye usko ReactElement() ki tarah execute nahi kiya ja sakta.

Plus, ReactElement yahan nahi chalega because iska custom render humne khud likha tha.
Wahan render function ko pata tha object ka structure kaisa hai.
ReactDOM ka render us custom object ko nahi samajhta.

anotherElement bhi kaam nahi karega agar woh sirf ek plain object ho.
React sirf valid React Elements ya Components ko render karta hai.
*/}

{/*//har react ek bundler use keta hai, koi babble hai koi vite hai.
//bundler behind the scene matching krta hai, syntax ko sudharna aur convert krna, improve krna.

//react ko html waala syntax samajh nhi aata, usko wo tree waala object type waala samajh aata hai.
//suppose yeh ek htmk element hai:  <h1>Custom App!</h1> toh iski parsing kii jaati hai, isko tree form mei convert krte hai jaise customReact mei kiye waise.

//function mei jo likhte hai wo ultimately parse hoke ek js object ke form mei badal jata hai, fir tree form mei.
//transpiler ya compiler object mei pass krta hai.

*/}
