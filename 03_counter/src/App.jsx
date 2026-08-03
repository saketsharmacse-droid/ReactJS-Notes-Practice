import { useState } from 'react' //this is importing a hook
//normally humein react ko import krne ki need nhi rhti hai as babel under the hood jaake sab kaam krke inject wagera krr deta hai _jsx.
//wrna import React, { useState} from 'react'
//jo bhi hook chahiye aisi hi leke aana padega since yeh ek method hai.
//{useCallback, useEffect} hum multiple hooks leke aa sakte hai.

//useState: this hook is responsible for the change in state,change mtlab yeh nhi ki values update krr dii jaa rhi, balki values ko propagate kiya jata hai ui ke andar , mtlab dom ke andar.

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)//as counter ki default 15 hai.
  //isme jo dusri value hai setCounter wo ek method hai ek function hai, name can be differnt, this method will control the first variable counter.
  //counter dekh ke react kya krega, poore document mei jaha bhi yeh counter variable dikhega usko, wo update krr dega, koi get element yaa increment wagera kuch nhi likhna, koi references nhi lena.
  //useState se mujhe do cheez milti hai array ke format se, counter and setCounter, login setLogin etc.
  //important cheez yeh aayegi ki aap variable ke andar default value kya dena chah rhe ho
  //kuch bhi de sakte ho, like  useState(true), useState(false) useState("") useState([empty array]), useState("saket"), useState(functions), useState({object})

  // let counter = 15 comment as yeh ui mei update nhi hoyega
  const addValue = () => {
    
   
    //counter = counter + 1;
    //setCounter(counter)
    setCounter(counter + 1)
    //  console.log("clicked", counter);

    if (counter < 20){ 
      setCounter(counter + 1)
    } 
    else {
      setCounter (20) //setcounter(counter = 20) is incorrect as we do not directly assign in the reacts state variables.
    }
  }
  //setCounter naam rakhna hi zaruri nhi hai, can name it  also as saketcounter whatsoever.

  const removeValue = () => {
    if (counter == 0){ 
      setCounter(0)
    } 
    else {
      setCounter (counter - 1)
    }

     //setCounter(counter - 1) //haan, negative bhi hoga ispe.
  }

  return (
  <>
      <h1> Saket aur Chai</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Increase Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Decrease Value {counter}</button>
      <br/>
      <p>Footer : {counter}</p>

  </> 
  )
}

export default App

//react ki power yeh hai ki wo control mei leta hai ui updation ko, aur ek saath multiple elements control krke elements ko manipulate krta hai.
//yaha pe sirf ek {} use krke hum same variable ki value ko multiple places pe inject krwa sakte hai, but js se krne jaate toh har time documentbyid krke fir innerHTML ko update krna padta, but react has the power to do all these by himself.
//that means ki, jo variables hai jo values leke aana hai aao, ui mei kaha pe kya update hoga yeh purely react dekhega.
//react provides various methods to do these kind of updation.
//these methods are called hooks.


//react ke saare hooks yaha pe rhte hai: react/react/packages/react/src/ReactHooks.js in https://vscode.dev/github/facebook/react/blob/main/packages.


//so, ui updation ko react control krta hai.
//hence, yaha pe humnein dekha ki changes kaise hote hai react mei and unko propogate kaise krwaya jata hai.