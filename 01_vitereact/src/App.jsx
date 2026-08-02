import Saket from "./Saket"


function App() {
  // const [count, setCount] = useState(0)

  const username = "Saket Sharma"

  return (
    // <h1> Saket aur Vite | Saket</h1> hum yaha pe Saket.js ko export krwa ke dekh rhe.

    <>
    <Saket/>
    <h1>Chai aur saket {username}</h1> 
    <p>test paragraph.</p>
    </>
  )
}

//{} is a syntax and iske andar {username} waali cheez ko variable treat krte hai, as in `${}`.

//{username} is known as expression.
//isko bolte hai evaluated expression, jaha pe hum js ki evaluated value likhte hai, final outcome krte hai.
//yeh ek return expression hai, yaha pe {if(true)} yeh sab jaise evaluation nhi likh sakte.
//return expression ke andar evaluation nhi likhenge, bhle upar function mei yaa bahar kahi likh sakte hai.
//evaluated expression hi likh sakte hai {} ispe.

export default App

//return ek hi element krne ka rule hai react mei.
//mtlab, elements to be returned must have a single enclosing.
//toh, <div> ... </div> krke return krr sakte hai.
//that means ki ek div bhi toh ek hi element hua, ab usek andar multiple eklements ho sakte hai bhle, but in a nutshell, ek hi div return hoyega.

//react fragments:
//<> </> isi ko fragments bol diya gya.


//App ek function hai
