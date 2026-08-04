import { useState, useCallback, useEffect, useRef } from 'react'
//kisi bhi cheez ka reference lene ke liye useRef hook


//useCallback react hook is a react hook that lets you cache a function definition between re-renders.
//mtlab yeh mere pass jo ek function hai usko jitna ho sakte ek memory mei rakh lo, and mai dubara se run kru toh jitna part phle se use hota hai usko rakh lo, baaki rhne do.
//argument mei function pass hoga aur dependency pass hoga.
//dependency mtlab yeh hota haiki uske change hote hi wo function wapis se render hoga yaa run hoga.


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

//useRef hook
const passwordRef = useRef(null) //default value dete hai, abhi koi ni hai toh null
  

  //password generator method bnayenge:
  //use callback hook use krenge.
  const passwordGenerator = useCallback(() => {
    //callback
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+=-[]{}`~|/?,.'
    //ek loop chala ke string se values le lenge, loop utni baar chlegi jo value length ki hogi.

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

const copyPasswordToClipBoard = useCallback(() => {
  passwordRef.current?.select() //jab copy ko press krenge toh highlight hoga text
  passwordRef.current?.setSelectionRange(0, 3)//sirf phla 3 character select hoga, but copy poora hoga.
  window.navigator.clipboard.writeText(password)
}, [password])

//jaise hi mera page run hoga waise useEffect call hoga, run hoga.
useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow bg-white rounded-lg overflow-hidden mb-4' >
          <input 
                type='text'
                value={password}
                className='outline-none text-black w-full py-1 px-3'
                placeholder='password'
                readOnly
                ref={passwordRef}
                >

          </input>
          <button 
          onClick={copyPasswordToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div>
        <div className='flex  text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
                type='range' 
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
                />
                <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
                type='checkbox'
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange = {() => {
                  setNumberAllowed((prev) => !prev); //prevValue reverse to prev value
                }} />
              <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
                type='checkbox'
                defaultChecked={charAllowed}
                id='characterInput'
                onChange = {() => {
                  setCharAllowed((prev) => !prev)
                }} />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

//useEffect hook: it is a hook that lets us synchronize a component with an external system.
//useEffect is used in memoise the array.
