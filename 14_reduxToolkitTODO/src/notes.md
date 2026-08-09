# Notes:

- Redux is an independent library just like react.
- we use redux for state management.

- redux is a state management library.
- redux apne aap mei state management ke liye ek independent library hai.
- redux ko react ke saath use krne ke liye toolkit lagta hai react-redux.

- phle problems encounter hue development mei, toh facebook nei encounter kiya data flow mei problems, so they brought a library called Flux.
- Flux ka data management bahut accha tha, uska data flow bahut accha tha, state management
ek central store hona chahiye jisse saare components apna data le sakein.

- Redux laaya gya jo ki improvements tha flux ka, core working based on flux with certain better methods, a better level of abstraction jisse kaam thoda kam krna pade.
- actually reduc ko conventionally setup krne mei bahut saare scripts lagte thhe, it was a hefty job, yeh install kro wo install kro.
- isliye redux-toolkit laaya gya, which had certain methods to ease the use of redux.
- context api was proving insignificant for large scale projects, toh redux became useful.

- Redux mei mainly four cheezein krte hai:
    - Store
    - Reducers
    - useSelect
    - useDispatch

- redux is a core library which is needed whenever using react-redux.
- react-redux is an implementation of redux with react, winding krne ke liye taaki react aur redux ki aapas se baat chit ho sakte.

- there's an old saying: that never mutate your state.

## setup and usage:
- hum humesha start krte hai store banane se.
- ek application ka humesha ek hi store hota hai, jisko bola jaata hai single source of truth.
- kya kya chahiye:
    - ek configureStore chahiye jisse humara object configure ho jata hai.
    ``` js 
    store.js
    //store bnane ka poora process rhega:
    //step1:configure store

    import {configureStore} from '@reduxjs/toolkit'
    import todoReducer from '../features/todo/todoSice'

    export const store = configureStore({
        reducer: todoReducer //abhi humare pass ek hi key value property hai, baad mei multiple bhi ho sakti hai.
        //humko iske andar ab saare reducer introduce krna hai kyoki store ke andar jab bhi value update hogi, wo har tarah se value update nhi leta hai, kabhi nhi leta hai, yeh data flow hi nhi hai.
        //data flow ke liye usko awareness chahiye ki mujhe batao ki saare reducer kaha pe hai.
    })
    ```

    - reducer bnaye nhi hai, toh bnane ke liye features/todoSlice mei jaayenge.
    - its a naming convention that redux mei features ko slice bolte hai, aap kuch bhi bol sakte ho, doesnt matter.
    - slice bnane ke liye createSlice use hota hai method.
    - slice bnane ke liye mainly three cheezein chahiye rhti hai:
        - ek uska name rhta hai.
        - ek uski initial state
        - ek reducerski poori list chahiye rhti hai jo jo kaam krr rhe hai wo.

    ``` js
    import {createSlice, nanoid} from '@reduxjs/toolkit';
    //nanoid generates unique ids.

    const initialState = {
        todos: [
            {
                id: 1,
                text:"Hello World",

        }] 
    }
    //initial state bnaoge slice ka



    export const todoSlice = createSlice({
        name: 'todo', //name diye todo
        initialState, //initial state upar de diye.
        //reducer diye, jo ki ek object hai and uske andar key-value/key-function use krenge.
        //bade projects mei reducers dusre file mei bnate hai and yaha pe import krr dete hai.
        reducers: {
            addTodo: (state, action) => { 
            //state ke andar updated state value in the store milti hai.
            //action mei action.payload milta hai.
                const todo = {
                    id: nanoid(),
                    text: action.payload,

                    //phle kya krte thhe, state se values ko arrays ke form mei nikalta, unko spread krta , aur fir insert krta.
                    //but idhar wo sab kaam abstraction ho gyi hai, apne aap hote jaari hai.
                    //unlike context api, mujhe data loss ka chinta nhi krna hai to spread and all.
                    //waha pe problem hori thi kyoki udhar state preserved nhi rhti thi, idhar state is preserved.

                }
                state.todos.push(todo)
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id != action.payload)
            },
        }
    })

    export const {addTodo, removeTodo} = todoSlice.actions
    //yaha pe humein sab reducers ko export krna padega, kyoki humein nhi pta konse functionality mei konsa reducer use hoyega.

    export default todoSlice.reducer
    //yaha pe saare reducers ka main source export krr rhe hai, kyoki humein isko kaam mei lena hai apne store ke andar.

    //yeh el structured syntax hai, aisi export krna hai reducers ko, do baar.
    ```

- for mai store ke andar gya and isko bola ki le lijiye yeh hai reducer ki list.
``` js 
 reducer: todoReducer
 ```

- ab, humare components mei do cheeszein hai, ki value leni hai ki bhejni hai.
- addTodo ke andar values bhejni hai.
- behjne ke liye mere pass dispatch hai.
```js
import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSice'

function AddTodo(){ //yaha pe hum reducer ko import krenge, zaruri hi for dispatch.


    const [input, setInput] = useState('')
    const dispatch = useDispatch() //values bhejne ke liye dispatch hai.

    //dispatch reducer ko use krte hue store ke andar values change krta hai.

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input)) //dispatch ek method hi hai, iske anda rjo bhi value denge, jis reducer ka value usko bhej denge
        setInput('')
    }


    return(
            <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
        Add Todo
        </button>
    </form>
    )
}

export default AddTodo;
```

- ab value bhejni kaise hai, uske liye humare pass slector hai, usko select krrlo.
```js
import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {removeTodo} from '../features/todo/todoSice'

function Todos(){

    const todos = useSelector(state => state.todos) //selector se values select hpyegi.
    //yeh bhi ekmethod hi hai just like dispatch, but tareeks thoda sa different hai.
    //dispatch mei toh bhejna hai, toh bhejte time kuch bhi bhejo, but select krte time kahi se toh select krna padega na, values lene ke liye state ka access chahiye rhega.
    //ek callback ke through aapko jo bhi value chahiye uska access mil jayega.

    const dispatch = useDispatch() //yeh dispatch remove todo ke liye hai.
    //remove krna hai, kuch values bhejni hai mtlab dispatch use hoga.
    return(
        <div>
            <ul className="list-none">
        {todos.map((todo) => (
        <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
        >
            <div className='text-white'>{todo.text}</div>
            <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
                </svg>
            </button>
            </li>
        ))}
    </ul>
        </div>
    )
}

export default Todos;
```