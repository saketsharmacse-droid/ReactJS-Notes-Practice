import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  //class is a reserved name in jsx, toh hum likhenge className
  //for is also a lop keyword, toh we use htmlfor
  // let myObj = {
  //   username: "Saket",
  //   age: 23
  // }
  // let newArr = [1,2,3,4]

  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl p-5 mb-4'>Tailwind Test</h1>

    <Card channel="Saket Sharma" />
    <Card channel="Teeyu Sharma"/>
    </>
  )
}

  //<Card channel="Saket Sharma" newObj={myObj} myArr={newArr}/>
  // <Card channel="Saket Sharma" btnText='visit me'/>
  //function Card({channel, btnText})
  //agar prop pass nhi hua, toh default value {btnText || "Visit me"} : prople dont use this beacuse of low readibility, no performance issue.
//so we give default in time of passing: function Card({channel, btnText="visit Me"})
//props extraction 
  


export default App

//props kya krta hai ki wo poore component ko reusable bnata hai.
//suppose humnein css use krke tailwind se ek component leke aaye, jaise ek card.
//react humein technology ke base pe files ko seggerate krne nhi bolta, balki uske component ke work ke according separate krne bolta hai.
//mtlab humein alag alag js css html ki files bnane ki need nhi, hum ek single component bna sakte hai jisme yeh teeno aake ek cheez bna rhe jaise ek card.
//ab props humein poore component ko return krne ki help krwata hai, we can return the entire component as a whole, aur jo values pass krenge unko dikhayega.
//isse humara wo tailwind ka component became modular and used by multiple cases.
//src ke andar Card.jsx bnana hai.

//install extension called react snippets.