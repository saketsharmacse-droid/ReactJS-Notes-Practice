import Saket from "./Saket"


function App() {
  const [count, setCount] = useState(0)

  return (
    // <h1> Saket aur Vite | Saket</h1> hum yaha pe Saket.js ko export krwa ke dekh rhe.
    <Saket/>
  )
}

export default App

//return ek hi element krne ka rule hai react mei.
//mtlab, elements to be returned must have a single enclosing.
//toh, <div> ... </div> krke return krr sakte hai.
//that means ki ek div bhi toh ek hi element hua, ab usek andar multiple eklements ho sakte hai bhle, but in a nutshell, ek hi div return hoyega.

//react fragments:
//<> </> isi ko fragments bol diya gya.
